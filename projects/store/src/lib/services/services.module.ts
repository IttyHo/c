import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddressService } from './address.service';
import { PaymentService } from './payment.service';
import { ConfigurationService } from './configuration.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[AddressService , PaymentService , ConfigurationService]
})
export class ServicesModule { }
