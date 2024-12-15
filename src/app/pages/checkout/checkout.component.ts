import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Address, AddressService , PaymentService } from 'store';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{

  creditCards: any;
  isSelectedAddress: boolean = false;;


  constructor(private addressService:AddressService,
    private paymentService:PaymentService
  ){

  }

  addresses: Address[] = [
    // { name: 'Home', street: '123 Main St', city: 'Tel Aviv' },
    // { name: 'Office', street: '456 Office Rd', city: 'Haifa' }
  ];
  selectedAddress = this.addresses[0];
  showAddressForm = false;
  newAddress:Address = {
    id:'',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    state: '',
    zipCode: '',
    saved:false
  };
 ;
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
    this.addressService.getAddress().subscribe(address=>{
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
    this.addressService.addAddress(this.newAddress).subscribe(add=>{
      console.log(add);
      
      this.addresses.push({ ...this.newAddress })
    }
    )
    console.log(this.addresses);
    
    // this.newAddress = {};
    this.showAddressForm = false;
  }

  selectAddress(address: Address) {
    this.selectedAddress = address;
    this.isSelectedAddress=true;
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  updateAddressToCheckout() {

    this.addressService.updateAddressToCheckout(this.selectedAddress.id ).pipe(
       map(_ => this.selectedAddress=null)
    ).subscribe( );

  }

  completeCheckout() {
    alert('Checkout completed!');
  }
}