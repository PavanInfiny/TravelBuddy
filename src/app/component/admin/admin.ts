import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Adminedit } from '../adminedit/adminedit';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule,CommonModule,Adminedit],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  loginSuccess:boolean=false;
  email=new FormControl();
  password=new FormControl();
  displayError:boolean=false;
  loginButton(){
    if(this.email.value=="admin@gmail.com" && this.password.value=="admin"){
      this.loginSuccess=true;
    }
    else{
      this.displayError=true;
    }
  }
}
