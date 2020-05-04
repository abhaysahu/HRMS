import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  Employee: any[] =[]

  constructor(private employeeService: EmployeeService) {

    this.employeeService.getemployee().subscribe(resp=>{
      this.Employee = resp[0]
      console.log(this.Employee)
      console.log(resp)
    })


   }

  ngOnInit() {

  }

}
