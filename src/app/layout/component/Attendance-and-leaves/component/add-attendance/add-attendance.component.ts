import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit {
  Addattendance: any[] = [];



  constructor() { }

 ngOnInit() {
  }
  onSubmit(addattendance) {
    console.log(addattendance) 
  }
}
