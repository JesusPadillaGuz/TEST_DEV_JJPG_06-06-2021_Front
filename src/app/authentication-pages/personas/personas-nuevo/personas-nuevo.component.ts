import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonaFisicaModel } from 'src/app/models/PersonaFisica.model';
import { PersonaFisicaService } from 'src/app/services/persona-fisica.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personas-nuevo',
  templateUrl: './personas-nuevo.component.html',
  styleUrls: ['./personas-nuevo.component.css']
})
export class PersonasNuevoComponent implements OnInit {
  persona=new PersonaFisicaModel;
  personaFisicaNuevo:FormGroup;

  selected: FormControl = new FormControl(null);
  opc: any; 

  constructor(private location: Location,
    private personaFisicaService:PersonaFisicaService,
    private toastService: ToastrService) { 
    
  }
 
  ngOnInit(): void {
    this.personaFisicaNuevo= new FormGroup({
      nombre             : new FormControl(),
      apellidoMaterno    : new FormControl(),
      apellidoPaterno    : new FormControl(),
      FechaNacimiento    : new FormControl(),
      RFC                : new FormControl(),
      UsuarioAgrega      : new FormControl(),
    });
  }

  onSubmit(usuarioFormulario){
    if(usuarioFormulario['RFC'].length!=13){
      this.toastService.info("RFC No válido");
      return;
    }
    this.persona.Nombre=usuarioFormulario['nombre'];
    this.persona.ApellidoMaterno=usuarioFormulario['apellidoMaterno'];
    this.persona.ApellidoPaterno=usuarioFormulario['apellidoPaterno'];
    this.persona.FechaNacimiento=usuarioFormulario['FechaNacimiento'];
   this.persona.RFC=usuarioFormulario['RFC'];
  this.persona.UsuarioAgrega=1;
     this.personaFisicaService.newPersona(this.persona).subscribe((resp:any)=>{
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
