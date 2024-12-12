import { Component, OnInit } from '@angular/core';
import { AddressService , PaymentService } from 'store';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
  creditCards: any;


  constructor(private addressService:AddressService,
    private paymentService:PaymentService
  ){

  }

  addresses = [
    { name: 'Home', street: '123 Main St', city: 'Tel Aviv' },
    { name: 'Office', street: '456 Office Rd', city: 'Haifa' }
  ];
  selectedAddress = this.addresses[0];
  showAddressForm = false;
  newAddress = { name: '', street: '', city: '' };

  paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer'];
  selectedPaymentMethod = this.paymentMethods[0];

  cartItems = [
    { name: 'Item 1', quantity: 2, price: 50 },
    { name: 'Item 2', quantity: 1, price: 30 }
  ];

  toggleAddressForm() {
    this.showAddressForm = !this.showAddressForm;
  }


  ngOnInit() {
    this.addressService.getDataWithToken('C4D5C577E9914C4B9C9BF46DF9914A28').subscribe(address=>{
      this.addresses=address
      console.log({address});
      
    })

    this.paymentService.getPaymentOptions('C4D5C577E9914C4B9C9BF46DF9914A28').subscribe(payment=>{
      this.paymentMethods=payment
      console.log({payment});

    })
    this.paymentService.getPaymentCreditCardOptions('C4D5C577E9914C4B9C9BF46DF9914A28').subscribe(payment=>{
      this.creditCards=payment
      console.log({payment});

    })
  }

  addAddress() {
    this.addresses.push({ ...this.newAddress });
    this.newAddress = { name: '', street: '', city: '' };
    this.showAddressForm = false;
  }

  selectAddress(address: any) {
    this.selectedAddress = address;
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  completeCheckout() {
    alert('Checkout completed!');
  }
}