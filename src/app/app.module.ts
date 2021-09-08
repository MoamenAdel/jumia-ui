
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AppRoutingModule } from './app-routing.module';
import {CustomerService} from './customer/customer.service';
import {HttpClientModule} from "@angular/common/http";

import {DataTablesModule} from 'angular-datatables';
import 'rxjs/add/operator/map';
 
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    

  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }