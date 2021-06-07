import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  template: `
  <input type="submit" value="Entrar" class="btn float-right login_btn">
  `,
})
export class LoginComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<boolean>();
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {}

  public email = '';
  public password = '';
  message: boolean = false
  
  ngOnInit() {
  }



  onLogin(){
    if(this.email==""||this.password==""){
      this.toastService.error("Faltan llenar campos");
      return;
    }
     var response = this.loginService.loginUser(this.email, this.password);
     if(response.Success==true){
      this.toastService.success("Bienvenido");
      this.messageEvent.emit(this.message);
      this.router.navigate(['/principal']);
     }else{
       this.toastService.error("Credenciales Incorrectas");
     }
  }


  onLogout(){
    //this.userService.logoutUser();
  }


}
