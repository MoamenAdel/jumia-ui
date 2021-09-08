import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './../models/customer.model';
import { Observable } from 'rxjs';
 
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class CustomerService {
 
  constructor(private http:HttpClient) {}
 
  private CustomerUrl = 'http://localhost:7080/customer';
 
  public getCustomers(): Observable<Customer[]>  {
    return this.http.get<Customer[]>(this.CustomerUrl);
  }
 
  public getCustomersByCountryName(countryName:string): Observable<Customer[]>  {
    return this.http.get<Customer[]>(this.CustomerUrl,{
      params:{
        country: countryName
      }
    });
  }
 
}