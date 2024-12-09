import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
StoreModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
