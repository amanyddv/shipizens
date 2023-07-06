import { Component } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private router: Router) { }

  navigateToComponentB() {
    
   
  }
  userType='Personal';
  next(){
    console.log(this.userType)
    this.router.navigate(['/Register', this.userType]);

  }
}
