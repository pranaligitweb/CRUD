import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient){

  }


  get(url:any){
    return this.http.get(url);
  }
  delete(url:any){
    return this.http.delete(url);
  }

  post(url:string, data:any){
    return this.http.post(url,data);
  }

  put(url:string,data:any){
    return this.http.put(url,data);
  }


}
