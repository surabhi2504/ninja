import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { UserDetails } from '../userDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users : any;
  isValidated : boolean;
  role:String;
  constructor(private userService : LoginServiceService,public router:Router) {
    //this.Users= userService.getUsers();
   }

  ngOnInit() {
    this.loginForm= new FormGroup({
      username: new FormControl(''),
      password :new FormControl('')
    });
   this.isValidated = false;
  
  }

  //getUsers(): void {
    //this.Users= this.userService.getUsers();
    //console.log(this.Users);
     //   }
  login(){
  
    this.isValidated = false;
    return this.userService.getUsers(this.loginForm.value).subscribe(response=>{
       console.log(response);
       this.users=response;
       if(this.users != null){
        this.role=this.users.role;
        this.isValidated=false;
        console.log(this.isValidated);
       this.router.navigateByUrl('/loginSuccess',{ state: this.users });

      }else{
        this.isValidated = true;
      }
    })  
  }
 
}

