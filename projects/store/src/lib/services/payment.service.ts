import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../types/http-request.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends HttpServiceBase {


  private get _serverUrl(): string {
    return `${this.configService.ips.swaggerPath}/api/Payment`;
  }

  constructor(public http: HttpClient,
    public configService: ConfigurationService) {
    super(http, configService);
  }

  getPaymentOptions(): Observable<string []> {
    return this.get$ (new HttpRequestModel({
      url: this._serverUrl+'/Options',
      headers:this.configService.headers
    }));
  }        
  
  
  getPaymentCreditCardOptions(): Observable<string []> {
    return this.get$ (new HttpRequestModel({
      url: this._serverUrl+'/Creditcards',
      headers:this.configService.headers
    }));
  }   
}
