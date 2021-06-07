import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaFisicaService {
  baseUrl = 'https://localhost:44383';
  // baseUrl = 'https://localhost:5001/';
  constructor( private httpClient: HttpClient) { }


  
  getPersonas(){
    return this.httpClient.get(`${this.baseUrl}/api/PersonaFisica/getPersonasFisicas`);
}
getPersonaById(id){
  return this.httpClient.get(`${this.baseUrl}/api/PersonaFisica/getPersonaFisica/${id}`);
}
deletePersona(id){
  return this.httpClient.delete(`${this.baseUrl}/api/PersonaFisica/bajaPersonaFisica/${id}`);
}
newPersona(persona){
  return this.httpClient.post(`${this.baseUrl}/api/PersonaFisica/agregarPersonaFisica`,persona);
}

actualizarPersona(id, persona){
   return this.httpClient.put(`${this.baseUrl}/api/PersonaFisica/actualizarPersonaFisica/${id}`,persona);
 }
}
