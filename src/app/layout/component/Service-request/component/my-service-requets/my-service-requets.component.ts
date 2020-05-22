import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-service-requets',
  templateUrl: './my-service-requets.component.html',
  styleUrls: ['./my-service-requets.component.css']
})
export class MyServiceRequetsComponent implements OnInit {
  Servicerequest: any[] = [];

  constructor() { }

  ngOnInit() {
  }
  onSubmit(servicerequest) {
    console.log(servicerequest) 
  }
}
