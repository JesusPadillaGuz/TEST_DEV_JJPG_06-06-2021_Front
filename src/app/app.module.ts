import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipalComponent } from './authentication-pages/principal/principal.component';
import { PersonasControlComponent } from './authentication-pages/personas/personas-control/personas-control.component';
import { PersonasNuevoComponent } from './authentication-pages/personas/personas-nuevo/personas-nuevo.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonasEditarComponent } from './authentication-pages/personas/personas-editar/personas-editar.component';
import { ReportesComponent } from './authentication-pages/reportes/reportes.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PrincipalComponent,
    PersonasControlComponent,
    PersonasNuevoComponent,
    PersonasEditarComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
