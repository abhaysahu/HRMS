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

  Employee: Employee

  constructor(private employeeService: EmployeeService) { 
    this.employeeService.getemployee().subscribe(resp=>{
      this.Employee = resp[0]
      console.log(this.Employee)
      console.log(this.Employee.name)
      
    })

    console.log(this.Employee)
  }

  ngOnInit() {
  }

  Basic(employee)
  {
    console.log(employee)
  }

  copyCurrentToPermanent(event) {
    console.log(event.target.checked)
    if ( event.target.checked ) {
     
        console.log("yes")
        this.employeeService.getemployee().subscribe(resp=>{
          this.Employee = resp[0]
          this.Employee.permanentName = this.Employee.addressName
          this.Employee.permanentNumber = this.Employee.addressNumber
          this.Employee.permanentAddressLine1 = this.Employee.currentAddressLine1
          this.Employee.permanentAddressLine2 = this.Employee.currentAddressLine2
          this.Employee.permanentCity = this.Employee.currentCity
          this.Employee.permanentState = this.Employee.currentState
          this.Employee.permanentZip = this.Employee.currentZip
        })
   }

   else {
    this.employeeService.getemployee().subscribe(resp=>{
      this.Employee = resp[0]
    })
   }
}


copyCurrentToEmergency(event) {
  console.log(event.target.checked)
  if ( event.target.checked ) {
      
      console.log("yes")
      this.employeeService.getemployee().subscribe(resp=>{
        this.Employee = resp[0]
        this.Employee.emergencyName = this.Employee.addressName
        this.Employee.emergencyNumber = this.Employee.addressNumber
        this.Employee.emergencyAddressLine1 = this.Employee.currentAddressLine1
        this.Employee.emergencyAddressLine2 = this.Employee.currentAddressLine2
        this.Employee.emergencyCity = this.Employee.currentCity
        this.Employee.emergencyState = this.Employee.currentState
        this.Employee.emergencyZip = this.Employee.currentZip
      })
 }

 else {
  this.employeeService.getemployee().subscribe(resp=>{
    this.Employee = resp[0]
  })
 }
}

copyPermanentToEmergency(event) {
  console.log(event.target.checked)
  if ( event.target.checked ) {
      
      console.log("yes")
      this.employeeService.getemployee().subscribe(resp=>{
        this.Employee = resp[0]
        this.Employee.emergencyName = this.Employee.permanentName
        this.Employee.emergencyNumber = this.Employee.permanentNumber
        this.Employee.emergencyAddressLine1 = this.Employee.permanentAddressLine1
        this.Employee.emergencyAddressLine2 = this.Employee.permanentAddressLine2
        this.Employee.emergencyCity = this.Employee.permanentCity
        this.Employee.emergencyState = this.Employee.permanentState
        this.Employee.emergencyZip = this.Employee.permanentZip
      })
 }

 else {
  this.employeeService.getemployee().subscribe(resp=>{
    this.Employee = resp[0]
  })
 }
}

}
