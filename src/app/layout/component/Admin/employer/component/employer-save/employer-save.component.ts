import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-save',
  templateUrl: './employer-save.component.html',
  styleUrls: ['./employer-save.component.css']
})
export class EmployerSaveComponent implements OnInit {
  Employer: any[] = [];


  constructor() { }

  ngOnInit() {
  }
  onSubmit(employer) {
    console.log(employer)  
  }
}
 