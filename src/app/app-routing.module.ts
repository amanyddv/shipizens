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

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path:'Service',component:ServiceComponent},
  { path:'Faqs',component:FaqsComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegistrationComponent},
  { path: 'Register/:value', component: UserRegistrationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
