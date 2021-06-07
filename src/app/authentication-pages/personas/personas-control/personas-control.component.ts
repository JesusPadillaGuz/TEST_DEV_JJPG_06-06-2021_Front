import { Component, OnInit } from '@angular/core';
import { PersonaFisicaService } from 'src/app/services/persona-fisica.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';




@Component({
  selector: 'app-personas-control',
  templateUrl: './personas-control.component.html',
  styleUrls: ['./personas-control.component.css']
  
})
export class PersonasControlComponent implements OnInit {

  personaFisica={};
  listaPersonasFisicas;

   constructor(private location: Location,
    private personaFisicaService: PersonaFisicaService,
    private toastService: ToastrService
    ) { 
    this.personaFisicaService.getPersonas().subscribe((resp:any) => {
      this.listaPersonasFisicas = resp.personasFisicas;
      console.log(resp);
    });
  }

  ngOnInit(): void {
  }

  auxUsuario(aux={}){
    this.personaFisica=aux;
    console.log("esta es la persona en el modal", this.personaFisica);
  }
 
  onDelete(){
    
    this.personaFisicaService.deletePersona(this.personaFisica['idPersonaFisica']).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.success==true){
        for (let index in this.listaPersonasFisicas) {
          if (this.listaPersonasFisicas[index].idPersonaFisica==this.personaFisica['idPersonaFisica']) {
            this.listaPersonasFisicas.splice(Number(index),1);
          }
        }
        this.toastService.success(resp.message);
     }else{
       this.toastService.error(resp.message);
     }
    });
    
  }
  back(): void {
    this.location.back();
  }

}
