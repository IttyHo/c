import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { Address } from '../types/address';
import { HttpServiceBase } from './http-service.base';
import { HttpRequestModel } from '../types/http-request.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends HttpServiceBase {

  headers: String = '';

  private get _serverUrl(): string {
    return `${this.configService.ips.swaggerPath}/api/Address`;
  }

  constructor(public http: HttpClient,
    public configService: ConfigurationService) {
    super(http, configService);
  }


  addAddress(address: Address): Observable<boolean> {
    return this.post$(new HttpRequestModel({
      url: this._serverUrl,
      body: address,
      headers:this.configService.headers
    }));
  }

  // addAddress(address:Address): Observable<boolean> {
  //   return this.http.post<boolean>(this.configService.ips.swaggerPath + '/api/Address', address,{
  //     headers: this.configService.headers,
  //   });
  // }


  updateAddressToCheckout(addressId:string): Observable<boolean> {
    return this.put$ (new HttpRequestModel({
      url: this._serverUrl+'/select',
      headers:this.configService.headers,
      qsData: addressId
    }));
  }


  getAddress(): Observable<Address[]> {
    return this.get$ (new HttpRequestModel({
      url: this._serverUrl,
      headers:this.configService.headers
    }));
  }



  
}
