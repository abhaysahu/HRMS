import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-timesheet',
  templateUrl: './my-timesheet.component.html',
  styleUrls: ['./my-timesheet.component.css']
})
export class MyTimesheetComponent implements OnInit {

  Timesheet: any[]=[];

  

  constructor() { }

  ngOnInit() {
  }

  onSubmit(timesheet)
  {
    console.log(timesheet)

  }

}
