import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LoginDetail} from './login-detail.model';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailService {

  constructor(private http:HttpClient) { }
  formData1:LoginDetail=new LoginDetail();
  list1:LoginDetail[];
  readonly baseURL='http://localhost:50585/api/Logindetail'
  postLoginDetail(){
    return this.http.post(this.baseURL,this.formData1);
  }
  
  
  

}
