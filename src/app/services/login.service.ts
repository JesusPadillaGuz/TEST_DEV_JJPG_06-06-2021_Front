import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/Response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   response= new ResponseModel;

  constructor() {
    
   }
  loginUser(email: string, pass: string){
    this.response.Success=true;
    this.response.message="Bienvenido";
    return this.response;
     /*return new Promise((resolve,reject)=> {
      //here the query
       .then( userData => resolve(userData),
       err=> reject(err));
     });*/
  }

}
