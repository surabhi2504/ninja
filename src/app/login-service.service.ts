import { Injectable } from '@angular/core';
import {UserDetails} from './userDetails';
import { USERS } from './userDetailsMock';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
//getUsers():UserDetails[]{
 // return USERS;
//}
  constructor(private http: HttpClient ) { }
  // public getUsers(obj):Observable<any>{
    
  //     return this.http.post('http://localhost:8080/login',obj,{responseType: 'json'});
  //    }

     public getUsers(obj){
      return this.http.post('http://localhost:8081/login',obj);
     }
}
