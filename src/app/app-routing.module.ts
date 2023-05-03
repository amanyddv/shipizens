import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'Service',component:ServiceComponent},
  { path:'Faqs',component:FaqsComponent},

  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
