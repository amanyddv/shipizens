import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';



@Injectable({ providedIn: 'root'})

export class ServiceService {
  local = "http://localhost:7000/"
  url = "https://shipizens-api.vercel.app/"
  uri="https://shipizens2api.vercel.app/"

  constructor(private http:HttpClient) { }
  send(contact:any){
    return this.http.post<any>(this.local+"contact",contact)  }
 
  message:any;
  clientRegistration(clientRegistrationDate:any){
    
    return this.http.post<any>(this.local+"userRegistraion",clientRegistrationDate)
  }


}
