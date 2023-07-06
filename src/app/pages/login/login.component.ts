import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userType="Personal"
  constructor(private service:ServiceService){

  }
  ngOnInit(){

  }
  Submit(data:any){
    this.service.login(data)
    
  }
  
}

