import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonaFisicaModel } from 'src/app/models/PersonaFisica.model';
import { PersonaFisicaService } from 'src/app/services/persona-fisica.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personas-editar',
  templateUrl: './personas-editar.component.html',
  styleUrls: ['./personas-editar.component.css']
})
export class PersonasEditarComponent implements OnInit {
persona=new PersonaFisicaModel;
idPersona:number;
 personaFisicaEditar= new FormGroup({
   idPersonaFisica: new FormControl(),
  nombre             : new FormControl(),
  apellidoMaterno    : new FormControl(),
  apellidoPaterno    : new FormControl(),
  FechaNacimiento    : new FormControl(),
  RFC                : new FormControl(),
  UsuarioAgrega      : new FormControl(),
});
 
  constructor( private location: Location,
    router: ActivatedRoute,
    private personaFisicaService: PersonaFisicaService,
    private toastService: ToastrService) { 

    personaFisicaService.getPersonaById(router.snapshot.params.id).subscribe((resp:any) => {
      console.log("reso",resp);
      this.personaFisicaEditar.controls['nombre'].setValue(resp.personaFisica['nombre']);
      this.personaFisicaEditar.controls['idPersonaFisica'].setValue(resp.personaFisica['idPersonaFisica']);
      this.personaFisicaEditar.controls['apellidoMaterno'].setValue(resp.personaFisica['apellidoMaterno']);
      this.personaFisicaEditar.controls['apellidoPaterno'].setValue(resp.personaFisica['apellidoPaterno']);
      var fecha = resp.personaFisica['fechaNacimiento'].toString();
      fecha = fecha.split('T')[0];
      this.personaFisicaEditar.controls['FechaNacimiento'].setValue(fecha);
      this.personaFisicaEditar.controls['RFC'].setValue(resp.personaFisica['rfc']);
      this.personaFisicaEditar.controls['UsuarioAgrega'].setValue(resp.personaFisica['UsuarioAgrega']);
      this.idPersona=resp.personaFisica['idPersonaFisica'];
    });
  }

  ngOnInit(): void {
  }

  onSubmit(usuarioFormulario){
    
    this.persona.Nombre=usuarioFormulario['nombre'];
    this.persona.ApellidoMaterno=usuarioFormulario['apellidoMaterno'];
    this.persona.ApellidoPaterno=usuarioFormulario['apellidoPaterno'];
    this.persona.FechaNacimiento=usuarioFormulario['FechaNacimiento'];
   this.persona.RFC=usuarioFormulario['RFC'];
  this.persona.UsuarioAgrega=1;
  this.persona.IdPersonaFisica=this.idPersona;
     this.personaFisicaService.actualizarPersona(usuarioFormulario.idPersonaFisica,this.persona).subscribe((resp:any)=>{
       console.log(resp);
       if(resp.success==true){
        this.toastService.success(resp.message);
     }else{
       this.toastService.error(resp.message);
     }
     })
  }

  back(): void {
    this.location.back();
  }


}
