import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Routes } from '@angular/router';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private location: Location,
    private route: Router,) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

  IrPersonas(): void {
    this.route.navigate(['/personasFisicas']);
  }

  IrReportes(): void {
    this.route.navigate(['/reportes']);
  }
}
