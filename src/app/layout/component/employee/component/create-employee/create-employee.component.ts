import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  Employee: any[]=[];


  constructor(private router: Router) { }

  ngOnInit() {
  }

  Basic(employee) {
    console.log(employee)
    let id=3
    this.router.navigate(['/dashboard/edit/employee/'+id]);
  }

}
