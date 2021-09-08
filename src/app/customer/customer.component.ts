import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Customer } from '../models/Customer.model';
import { CustomerService } from './customer.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-Customer',
  templateUrl: './Customer.component.html',
  styles: []
})
export class CustomerComponent implements OnDestroy, OnInit {

  customers: Customer[] | undefined;

  countryName: string;

  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};

  constructor(private router: Router, private CustomerService: CustomerService) {

  }
  searchByName(){
    this.CustomerService.getCustomersByCountryName(this.countryName)
      .subscribe(data => {
        this.customers = data;
        // this.dtTrigger.next();
      });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.CustomerService.getCustomers()
      .subscribe(data => {
        this.customers = data;
        this.dtTrigger.next();
      });
  };

  
}