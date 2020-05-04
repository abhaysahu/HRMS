import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  Employee: any[] =[];

  constructor(private employeeService: EmployeeService) { 
    this.employeeService.getemployee().subscribe(resp=>{
      this.Employee = resp[0]
      console.log(this.Employee)
      console.log(resp)
    })
  }

  ngOnInit() {
  }

  Basic(employee)
  {
    console.log(employee)
  }

}
