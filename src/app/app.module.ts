import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { StoreLibModule } from 'store';
import { TodoStoreModule } from '@store/store/todo/todo-store.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot( []),
    StoreLibModule,
    TodoStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
