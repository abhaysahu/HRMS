import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  addressName:string;
  

  Employee: Employee[]=[]

  constructor(private employeeService: EmployeeService) {

    console.log(this.Employee)

    this.employeeService.getemployee().subscribe(resp=>{
      this.Employee = resp[0]
      console.log(this.Employee)
      console.log(resp)
    })


   }

  ngOnInit() {

  }

}
