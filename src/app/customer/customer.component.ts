import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


import { Customer } from '../models/customer.model';
import { CustomerService } from './customer.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-Customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit, AfterViewInit {

  customers: Customer[] | undefined;

  countryName: string;

  dataSource = new MatTableDataSource<Customer>();

  displayedColumns: string[] = ['name', 'countryName', 'countryCode', 'phoneNumber', 'valid'];


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private CustomerService: CustomerService) {

  }

  searchByName() {
    this.CustomerService.getCustomersByCountryName(this.countryName)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      });
  }


  ngOnInit() {

    this.CustomerService.getCustomers()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      });
  }
  ngAfterViewInit() {
   
  }



}