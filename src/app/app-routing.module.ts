import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about us/about.component';
import { ServiceComponent } from './pages/our service/service.component';
import { ContactComponent } from './pages/contact us/contact.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { UserRegistrationComponent } from './form/user-registration/user-registration.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProfileComponent } from './profile/merchant/profile.component';
import { PersonalComponent } from './profile/personal/personal.component';
import { DriverComponent } from './profile/driver/driver.component';
import { TranspoterComponent } from './profile/transpoter/transpoter.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path:'Service',component:ServiceComponent},
  { path:'Faqs',component:FaqsComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegistrationComponent},
  { path: 'Register/:value', component: UserRegistrationComponent },
  {path:'Merchant',component:ProfileComponent}, //it is for merchant
  {path:'Personal',component:PersonalComponent},
  {path:'Driver',component:DriverComponent},
  {path:'Transpoter',component:TranspoterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
