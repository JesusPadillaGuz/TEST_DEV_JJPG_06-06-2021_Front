import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
Body;
  constructor(private httpClient: HttpClient) { }

  getToken(){
    this.Body={
      Username:"ucand0021",
      Password:"yNDVARG80sr@dDPc2yCT!"
    }
    return this.httpClient.post(`https://api.toka.com.mx/candidato/api/login/authenticate`,this.Body);
  }

  getCustomers(token){
    let header = new HttpHeaders().set(
      'Authorization', `Bearer ${token}`,
    );
    return this.httpClient.get(`https://api.toka.com.mx/candidato/api/customers`, {headers:header});
  }
}
