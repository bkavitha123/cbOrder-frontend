import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdashComponent } from './userdash/userdash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { DeliverydashComponent } from './deliverydash/deliverydash.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { OrderHistoryComponent } from './order-history/order-history.component'

@NgModule({
  declarations: [
    AppComponent,
    UserdashComponent,
    AdmindashComponent,
    DeliverydashComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CartlistComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
