import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, switchMap, map } from 'rxjs/operators';
import {  IpConfig } from '../types/ip-config';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  ips: IpConfig;
  headers: HttpHeaders;
  constructor(
    private http: HttpClient) {
  }

getTokenAndHeaders(){
  this.headers = new HttpHeaders({
    'Authorization': `Bearer ${this.ips.token}`
  });
}

  initConfiguration(path): Promise<any> {
    return combineLatest(
      this.http.get<IpConfig>(`${path}/ipConfig.json`),
    ).pipe(
      tap(res=>console.log),
      // map(response=>this.ips]),
      tap(response => [this.ips] = response),
      tap(_=>    this.getTokenAndHeaders() )
    ).toPromise();
  }
}
