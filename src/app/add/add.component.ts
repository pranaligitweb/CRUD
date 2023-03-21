import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  formdata:any;
  id:any;

  constructor(private api:ApiService, private route:Router, private activatedroute:ActivatedRoute){

  }

  submit(data:any){
    if(this.id == null){
      this.api.post("https://63fd9aa4cd13ced3d7bac03e.mockapi.io/api/vi/users" ,data).subscribe((result:any)=>{
        console.log(result);
        this.route.navigate(['/']);
      })
    }
     else{
      this.api.put("https://63fd9aa4cd13ced3d7bac03e.mockapi.io/api/vi/users" + this.id,data).subscribe((result:any)=>{
        console.log(result);
        this.route.navigate(['/']);
      })
     }
      
      
  }

  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe(params=>{
      this.id = params.get('id');
    if(this.id != null){
      this.api.get("https://63fd9aa4cd13ced3d7bac03e.mockapi.io/api/vi/users" + this.id).subscribe((result:any)=>{
        this.formdata.get("name").patchValue(result.name);
        this.formdata.get("email").patchValue(result.email);
        this.formdata.get("mobileno").patchValue(result.mobileno);
      });
    }
    });
   this.formdata = new FormGroup({
    name:new FormControl("",Validators.compose([Validators.required])),
    email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
    mobileno:new FormControl("",Validators.compose([Validators.required]))
   });
  }

  
  // changeEmail(){
  //   this.formdata.get("email").patchValue("gatadeabhijit@gmail.com");
  // }

}
