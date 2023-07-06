import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact us/contact.component';
import { AboutComponent } from './pages/about us/about.component';
import { ServiceComponent } from './pages/our service/service.component';
import { ServiceService } from './service/service.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { SliderComponent } from './components/slider/slider.component';
import { AnimatedMessageComponent } from './components/animated-message/animated-message.component';
import { UserRegistrationComponent } from './form/user-registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProfileComponent } from './profile/merchant/profile.component';
import { PersonalComponent } from './profile/personal/personal.component';
import { DriverComponent } from './profile/driver/driver.component';
import { TranspoterComponent } from './profile/transpoter/transpoter.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

  
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ServiceComponent,
    FaqsComponent,
    SliderComponent,
    AnimatedMessageComponent,
    UserRegistrationComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    PersonalComponent,
    DriverComponent,
    PersonalComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot()


  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
