import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  template: `
    Message: {{message}}
    <app-login (messageEvent)="receiveMessage($event)"></app-login>
  `,
})
export class NavbarComponent implements OnInit {

  constructor() { }
  message = true;
  ngOnInit(): void {
  }

  receiveMessage($event) {
    console.log("entro");
    this.message = $event
  }
}


