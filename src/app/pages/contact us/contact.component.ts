import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
constructor(private service:ServiceService){}
name=""
  email=""
  file=""
  message=""
  subject=""
  send(contact:any){
    
    
    alert("Please wait untill you receive a successfull message")

    this.service.send(contact)
    .subscribe((res)=>{
     
        this.name =""
        this.email =""
        this.message =""
        this.subject =""
      
      alert(res)
    })
   
    
    

    console.log(contact)
  }
}
