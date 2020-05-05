import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  copy = false

  Employee: Employee[] =[];

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

  toggleEditable(event) {
    console.log(event.target.checked)
    if ( event.target.checked ) {
        this.copy = true;
   }
}

}
