import { Component, OnInit } from '@angular/core';
import { RequestFilter } from '../../models/requestFilter';

@Component({
  selector: 'app-my-service-requets',
  templateUrl: './my-service-requets.component.html',
  styleUrls: ['./my-service-requets.component.css']
})
export class MyServiceRequetsComponent implements OnInit {
  Servicerequest = {} as RequestFilter;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(servicerequest) {
    console.log(servicerequest) 
  }
}
