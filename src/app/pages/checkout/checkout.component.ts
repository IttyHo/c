import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address, AddressService, PaymentService } from 'store';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  creditCards: any;
  isSelectedAddress: boolean = false;
  addressForm: FormGroup;
  shufersalLogo: string;
  ;


  constructor(private addressService: AddressService,
    private paymentService: PaymentService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {

  }

  addresses: Address[] = [
    // { name: 'Home', street: '123 Main St', city: 'Tel Aviv' },
    // { name: 'Office', street: '456 Office Rd', city: 'Haifa' }
  ];
  selectedAddress = this.addresses[0];
  showAddressForm = false;
  newAddress: Address;
  ;
  paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer'];
  selectedPaymentMethod = this.paymentMethods[0];

  cartItems = [
    { name: 'Item 1', quantity: 2, price: 50 },
    { name: 'Item 2', quantity: 1, price: 30 }
  ];

  toggleAddressForm() {
    this.showAddressForm = !this.showAddressForm;
    this.initForm();
  }


  ngOnInit() {
    this.addressService.getAddress().subscribe(address => {
      this.addresses = address;
      console.log({ address });

    })

    this.getPictures();
    this.paymentService.getPaymentOptions().subscribe(payment => {
      this.paymentMethods = payment
      console.log({ payment });

    })
    this.paymentService.getPaymentCreditCardOptions().subscribe(payment => {
      this.creditCards = payment
      console.log({ payment });

    })

    this.initForm();
  }

  getPictures(){
    this.shufersalLogo=environment.shufersalLogo;
  }


  initForm() {
    this.addressForm = this.fb.group({
      id: [''],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      country: ['', Validators.required],
      state: [''],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5,7}$')]],
      saved: [true]
    });
  }

  addAddress() {
    this.addressService.addAddress(this.addressForm.value).subscribe(add => {
      console.log(add);
      this.addresses.push({ ...this.addressForm.value })
    }
    )
    console.log(this.addresses);
    this.showAddressForm = false;
  }

  selectAddress(address: Address) {
    this.selectedAddress = address;
    this.isSelectedAddress = true;
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  updateAddressToCheckout() {

    this.addressService.updateAddressToCheckout(this.selectedAddress.id).pipe(
      map(_ => this.selectedAddress = null)
    ).subscribe()
    this.snackBar.open(
      `הכתובת שנבחרה למשלוח היא: ${this.selectedAddress.addressLine1} ${this.selectedAddress.city}`,
      'סגור',
      {
        duration: 5000,
        panelClass: ['my-snack-bar']
      }
    )
  }

  completeCheckout() {

    this.snackBar.open(
      'Checkout completed!',
      'סגור',
      {
        duration: 3000,
        panelClass: ['my-snack-bar']
      }
    )
  }
}