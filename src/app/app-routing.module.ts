import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { DeliverydashComponent } from './deliverydash/deliverydash.component';
import { LoginComponent } from './login/login.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { RegisterComponent } from './register/register.component';
import { UserdashComponent } from './userdash/userdash.component';

const routes: Routes = [
  { path: "userdash", component: UserdashComponent },
  { path: "admindash", component: AdmindashComponent },
  { path: "deliverydash", component: DeliverydashComponent },
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "cartlist", component: CartlistComponent },
  { path: "orderhistory", component: OrderHistoryComponent },
  { path: "delivery", component: DeliverydashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
