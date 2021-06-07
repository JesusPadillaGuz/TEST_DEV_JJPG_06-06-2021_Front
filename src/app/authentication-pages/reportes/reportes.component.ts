import { Component, OnInit } from '@angular/core';
import { PersonaFisicaModel } from 'src/app/models/PersonaFisica.model';
import { ReportesService } from 'src/app/services/reportes.service';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/services/excel.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  config: any;
customers;
dataForExcel = [];
  constructor(private reportesService: ReportesService,
    private toastService: ToastrService,
    private excelService: ExcelService,
    private location: Location
    ) {
   }

  ngOnInit(): void {
    this.getToken();
  }

  getToken(){
    this.reportesService.getToken().subscribe((resp:any) => {
      console.log(resp);
      if(resp.Data!=null){
        this.reportesService.getCustomers(resp.Data).subscribe((response:any)=>{
          if(response.Data!=null){
            this.customers=response.Data;
            // console.log("customers")
             this.config = {
               itemsPerPage: 20,
               currentPage: 1,
               totalItems: response.Data.length
             };
          }else{
            this.toastService.error("Fallo la recuperacion de los clientes");
          }
        });
      }else{
        this.toastService.error("Fallo la recuperacion del token");
      }
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
  
  generateExcel(){
    if(this.customers.length >0){
      this.customers.forEach((row: any) => {
        this.dataForExcel.push(Object.values(row))
      })
      this.excelService.exportExcel(this.dataForExcel);
    }
  }


  back(): void {
    this.location.back();
  }
}
