import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import{ToastrService} from 'ngx-toastr';
import {LoginDetail} from 'src/app/shared/login-detail.model';
import {LoginDetailService} from 'src/app/shared/login-detail.service';
import {Router} from '@angular/router';
import {MatDialogRef,MAT_DIALOG_DATA,MatDialog} from '@angular/material/dialog';
import { BookDetailFormComponent } from '../book-detail-form/book-detail-form.component';
 
@Component({
  selector: 'app-login-detail-form',
  templateUrl: './login-detail-form.component.html',
  styles: [
  ]
})
export class LoginDetailFormComponent implements OnInit {

  constructor(public service:LoginDetailService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form1:NgForm){
    this.service.postLoginDetail().subscribe(
      res=>{
        
        this.toastr.success('login success','login');
        this.router.navigate(['booklist']);             
      },
      err=>{
        this.toastr.error('invalid login');
      }
    );
  }
   

}
