import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  objectUserData:any

  constructor(private route: ActivatedRoute,private service:ServiceService) {
    
  
  }
  // ngDoCheck() {
  //   this.route.queryParams.subscribe(params => {
  //     this.objectUserData = JSON.parse(params['object']);
  //     console.log(this.objectUserData);
  //     // Use the object as needed in your profile component
  //   });}
  
  ngDoCheck(){
    this.objectUserData = this.service.getSharedValue();
    console.log(this.objectUserData)
  }
  
  
  
    profile="profile.jpg"
      
    
}
