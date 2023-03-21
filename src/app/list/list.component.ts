import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:any
constructor(private api:ApiService){

}
list(){
  this.api.get("https://63fd9aa4cd13ced3d7bac03e.mockapi.io/api/vi/users").subscribe((result:any)=>{
    this.users=result;
   })

}
  
  delete(id:any){
      if(confirm("sure to delete?")){
        this.api.delete("https://63fd9aa4cd13ced3d7bac03e.mockapi.io/api/vi/users/" +id).subscribe((result:any)=>{
          alert("deleted")
          this.list();
        })
      }
  }

  ngOnInit(): void {
    this.list();
  }
}
