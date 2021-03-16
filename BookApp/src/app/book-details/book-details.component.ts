import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from '../shared/book-detail.model';
import { BookDetailService } from '../shared/book-detail.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogRef,MatDialog,MatDialogConfig,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BookDetailFormComponent} from './book-detail-form/book-detail-form.component';
import {Router} from '@angular/router';
import { LoginDetail } from '../shared/login-detail.model';
import { LoginDetailService } from '../shared/login-detail.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent implements OnInit {
  list:BookDetail[];
  searchValue:string;

  constructor(public service:BookDetailService,public dialog:MatDialog,private router:Router,public service2:LoginDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  onSub():void{
    const dialogconfig=new MatDialogConfig;
    dialogconfig.autoFocus=true;
    dialogconfig.disableClose=false;
    dialogconfig.width="50%";
    dialogconfig.closeOnNavigation=true;
    dialogconfig.hasBackdrop=true;
    this.dialog.open(BookDetailFormComponent,dialogconfig);

  }
  populateForm(selectedRecord:BookDetail){
    this.service.formData=Object.assign({},selectedRecord)
    const dialogconfig=new MatDialogConfig;
    dialogconfig.autoFocus=true;
    dialogconfig.disableClose=false;
    dialogconfig.width="50%";
    dialogconfig.closeOnNavigation=true;
    dialogconfig.hasBackdrop=true;
    this.dialog.open(BookDetailFormComponent,dialogconfig);
  }
   
  onLogout(){  
    this.service2.formData1 = new LoginDetail();
    this.toastr.error("Log out was successfull",'Book Detail Register');    
    this.router.navigate(['login']);  
    
  }
  
  onDelete(id:number){
    if (confirm('Are you sure to delete this record ?'))
    {
    this.service.deleteBookDetail(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Deleted successfully",'Book Detail Register');
      },
      err=>{console.log(err)}

    )
    }

  }

}
