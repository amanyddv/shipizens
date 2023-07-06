import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({ providedIn: 'root'})

export class ServiceService {
  // local = "http://localhost:7000/"
  // url = "https://shipizens-api.vercel.app/"
  local="https://temp-shipizensapi.vercel.app/"

  constructor(private http:HttpClient,private router:Router) { }

  userData:any
  
  setSharedValue(value: any) {
    this.userData = value;
  }

  getSharedValue(): any {
    return this.userData;
  }

  send(contact:any){
    return this.http.post<any>(this.local+"contact",contact)  }
 
  message:any;
  clientRegistration(clientRegistrationDate:any){
    
    return this.http.post<any>(this.local+"userRegistraion",clientRegistrationDate)
  }

  login(data:any){
    console.log("sun")
    this.http.post<any>(this.local+"login",data).subscribe(
      (response: any) => {
        this.userData = response
        console.log(this.userData)
        this.router.navigate(['/'+data.userType]);


        
        // if (this.message == "OTP verification successful") {
        //   this.alertType='success'
        //   this.invalid=true;
        //   console.log(response)
          
        //    this.router.navigate(['/'+this.userType]);
        //    this.service.setSharedValue(response);



        // }
        // else{
        //   this.invalid=true;
        //   this.alertType='danger'
        // }
      }

    )


    // this.msg.login(detail)

    // sessionStorage.setItem("loginInfo", JSON.stringify(detail))
    // this.msg.check(detail).subscribe((res)=>{
    //   if(res==null){
    //     alert("Invalid password")
    //   }
    //   else{
    //     this.logi="profile";
    //   }
    // })

  }

}
