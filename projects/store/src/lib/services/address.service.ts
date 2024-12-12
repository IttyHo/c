import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }
  
  apiUrl='https://du-mock-checkout-7d42d0a76fbf.herokuapp.com';
  //https://du-mock-checkout-7d42d0a76fbf.herokuapp.com/#addresses
  getDataWithToken(token: string): Observable<any> {


    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(this.apiUrl+'/api/Address', { headers });
  }
}
