import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { PredictComponent } from './predict/predict.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
{
  path:'', component:LoginComponent
},

{
  path:'register', component:RegisterComponent
},{
  path:'dashboard', component:DashboardComponent
},
{
  path:'home', component :HomeComponent
},
{
  path:'predict', component :PredictComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
