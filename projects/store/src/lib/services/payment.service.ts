import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

 
  constructor(private http:HttpClient) { }
  
  apiUrl='https://du-mock-checkout-7d42d0a76fbf.herokuapp.com';
  //https://du-mock-checkout-7d42d0a76fbf.herokuapp.com/#addresses
  getPaymentOptions(token: string): Observable<any> {


    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    // https://du-mock-checkout-7d42d0a76fbf.herokuapp.com/api/Payment/options

    return this.http.get<any>(this.apiUrl+'/api/Payment/Options', { headers });
  }        
  
  
  
  getPaymentCreditCardOptions(token: string): Observable<any> {


    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    // https://du-mock-checkout-7d42d0a76fbf.herokuapp.com/api/Payment/options

    return this.http.get<any>(this.apiUrl+'/api/Payment/creditcards', { headers });
  }   
}
