import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { LoginService } from 'src/app/login/services/login.service';

class Person {
  id: number;
  firstName: string;
  lastName: string;

}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-my-attendance',
  templateUrl: './my-attendance.component.html',
  styleUrls: ['./my-attendance.component.css']
})
export class MyAttendanceComponent implements OnInit {
  Attendance: any[] = [];


  
  constructor(private http: HttpClient, private loginService: LoginService) {}

  ngOnInit() {
  }
  onSubmit(attendance) {
    console.log(attendance) 
  }
}

