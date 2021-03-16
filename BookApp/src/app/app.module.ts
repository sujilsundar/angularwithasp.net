import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import {AppRoutingModule} from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookDetailFormComponent } from './book-details/book-detail-form/book-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginDetailFormComponent } from './book-details/login-detail-form/login-detail-form.component';
import {RouterModule,Routes} from '@angular/router';
import { SearchfilterPipe } from './searchfilter.pipe';

const appRoutes:Routes=[{path:'',component:LoginDetailFormComponent},{path:'login',component:LoginDetailFormComponent},
{path:'book-detail',component:BookDetailFormComponent},{path:'booklist',component:BookDetailsComponent}]

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookDetailFormComponent,
    LoginDetailFormComponent,
    SearchfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatSliderModule
  ],
  entryComponents:[BookDetailFormComponent,LoginDetailFormComponent],
  providers: [{provide:MAT_DIALOG_DEFAULT_OPTIONS,useValue:{appearance:'fill'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
