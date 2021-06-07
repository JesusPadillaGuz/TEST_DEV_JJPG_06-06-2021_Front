import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasControlComponent } from './authentication-pages/personas/personas-control/personas-control.component';
import { PersonasEditarComponent } from './authentication-pages/personas/personas-editar/personas-editar.component';
import { PersonasNuevoComponent } from './authentication-pages/personas/personas-nuevo/personas-nuevo.component';
import { PrincipalComponent } from './authentication-pages/principal/principal.component';
import { ReportesComponent } from './authentication-pages/reportes/reportes.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'login' , component:  LoginComponent},
  { path: 'principal' , component:  PrincipalComponent},
  { path: 'personasFisicas' , component:  PersonasControlComponent},
  { path: 'personasFisicas/Nuevo' , component:  PersonasNuevoComponent},
  { path: 'personasFisicas/Editar/:id' , component:  PersonasEditarComponent},
  { path: 'reportes' , component:  ReportesComponent},
  { path: '**', redirectTo: 'login' },
  { path: ' ', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
