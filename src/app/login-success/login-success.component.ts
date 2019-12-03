import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDetails } from '../userDetails';
import { FileUploadService } from '../file-upload.service';


@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {
  
  value_Admin=false;
  value_User=false;
  value_Loan=false;
  value_Senior=false;
  interfacePage: FormGroup;
  show:boolean = false;
  uploadLocation:any = 'upload Location';
  user: UserDetails;
  fileToUpload: File = null;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private fileUploadService : FileUploadService) {
   
  }

  ngOnInit() {
    this.show =false;
    this.user=history.state;
     if(this.user.role =="admin"){
      this.value_Admin= true;
     }
     else if(this.user.role == "user"){
this.value_User = true;
     }
     else if(this.user.role == "Loan Officer"){
       this.value_Loan = true;
     }
     else{
       this.value_Senior = true;
     }
    this.interfacePage= new FormGroup({
    mobNumber: new FormControl('')
  });

}
toggle() {
  this.show = true; 
}


}
