import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { ServicesModule, StoreLibModule } from 'store';
import { TodoStoreModule } from '@store/store/todo/todo-store.module';
import { CheckoutModule } from './pages/checkout/checkout.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConfigurationService } from 'store';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckoutModule,
    ServicesModule,
    HttpClientModule,
    HomeModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot( []),
    StoreLibModule,
    TodoStoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initConfigValues, deps: [ConfigurationService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function initConfigValues(config: ConfigurationService) {
  return (_ => config.initConfiguration(environment.configPath));
}