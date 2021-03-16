import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from 'src/app/shared/book-detail.model';
import { BookDetailService } from 'src/app/shared/book-detail.service';
import {MatDialogRef,MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-book-detail-form',
  templateUrl: './book-detail-form.component.html',
  styles: [
  ]
})
export class BookDetailFormComponent implements OnInit {

  constructor(public service:BookDetailService,
    private toastr:ToastrService,private router:Router,private dialogRef:MatDialogRef<BookDetailFormComponent>,public actRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if (this.service.formData.bookDetailId == 0)
    {
      this.insertRecord(form);
    }
    else
    this.updateRecord(form);    
  }

  insertRecord(form:NgForm){
    this.service.postBookDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully','Book Detail Register');
      },
      err=>{console.log(err);}
    );
    this.dialogRef.close();
  }

  updateRecord(form:NgForm){
    this.service.putBookDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Book detail updated successfully','Book Detail')
      },
      err=>{console.log(err);}
    );
    this.dialogRef.close();  
}

  onCancel(form:NgForm){
    this.dialogRef.close();
    this.resetForm(form);
}

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new BookDetail();
  }

}
