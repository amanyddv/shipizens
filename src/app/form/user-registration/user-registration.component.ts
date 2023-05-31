import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  constructor(private service: ServiceService, private http: HttpClient) { }

  myReactiveForm!: FormGroup;
  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'aadhar': new FormControl(null, Validators.required),
      'dateOfBirth': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)
      ]),
      'confirmPassword': new FormControl(null, Validators.required),
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');

    if (
      passwordControl && confirmPasswordControl &&
      passwordControl.value !== '' &&
      confirmPasswordControl.value !== '' &&
      passwordControl.value !== confirmPasswordControl.value
    ) {
      confirmPasswordControl.setErrors({ 'passwordMismatch': true });
    } else {
      confirmPasswordControl?.setErrors(null);
    }
    return null;
  }
  message: any = "";

  submit() {
    console.log(this.myReactiveForm.value);
    if (this.myReactiveForm.valid) {
      this.service.clientRegistration(this.myReactiveForm.value).subscribe(
        (response: any) => {
          this.message = response.message;
          console.log(this.message)
        },
        (error: HttpErrorResponse) => {
          console.error('Error:', error);
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            this.message = 'Failed to send OTP: ' + error.error.message;
          } else {
            // Server-side error
            this.message = 'Failed to send OTP: ' + error.status + ' ' + error.statusText;
          }
        }
      );
    }

  }

  local = "http://localhost:7000/"
  uri = "https://shipizens2api.vercel.app/"


  invalid=false;
  alertType='success';
  sendOTP(otp: any) {
    console.log(otp)
    const payload = { email: this.myReactiveForm.value.email, otp: otp };

    this.http.post<any>(this.local + 'verify-otp', payload).subscribe(
      (response: any) => {
        this.message = response.message;
        console.log(this.message)

        if (this.message == "OTP verification successful") {
          this.alertType='success'
          this.invalid=true;


        }
        else{
          this.invalid=true;
          this.alertType='danger'
        }
      }

    )
  }
}
