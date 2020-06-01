import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { EmployeeData } from '../../models/EmployeeData';
import { testing } from '../../models/testing';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  addressName:string;
  

  Employee: any={

    FullName: null,
    PersonalEmail: null,
    LoginId: null,
    EmpCode: null,
    DateOfJoining: null,
    DateOfConfirmation: null,
    OfficialEmail: null,
    Department: {
        Value: null,
        Text: null
    },
    Designation: {
        Value: null,
        Text: null
    },
    Grade: null,
    HighestQualification: null,
    PriorExperience: null,
    MaritalStatus: {
        Value: null,
        Text: null
    },
    Gender: {
        Value: null,
        Text: null
    },
    PrimaryManager: {
        Id: null,
        Name: null
    },
    TriggerChangePwd: true,
    Status: {
        Value: 1,
        Text: null
    },
    Id: null,
    CreatedOn: null,
    CreatedOnUtc: null,
    UpdatedOn: null,
    UpdatedOnUtc: null,
    CreatedBy: {
        Id: null,
        Name: null
    },
    UpdatedBy: null,

    aadharCardNumber: null,
    panCard: null,
    uanCard: null,
    pfCard: null,


    addressName: null,
    addressNumber:null,
    currentAddressLine1: null,
    currentAddressLine2: null,
    currentCity: null,
    currentState: null,
    currentZip:215487,
    
    
    permanentName: null,
    permanentNumber:961762594511,
    permanentAddressLine1: null,
    permanentAddressLine2: null,
    permanentCity: null,
    permanentState: null,
    permanentZip:null,
   
    emergencyName: null,
    emergencyNumber:961762594522,
    emergencyAddressLine1: null,
    emergencyAddressLine2: null,
    emergencyCity: null,
    emergencyState: null,
    emergencyZip:21548722,

  }

  constructor(private employeeService: EmployeeService) {



    console.log(this.Employee)

    this.employeeService.getemployee().subscribe(resp=>{
      console.log(resp)
      this.Employee = resp.Data[0]
      console.log(this.Employee)
      console.log(resp)
    })


   }

  ngOnInit() {

  }

//   copyCurrentToPermanent(event) {
//     console.log(event.target.checked)
//     if ( event.target.checked ) {
     
//         console.log("yes")
//         this.employeeService.getemployee().subscribe(resp=>{
//           this.Employee = resp[0]
//           this.Employee.permanentName = this.Employee.addressName
//           this.Employee.permanentNumber = this.Employee.addressNumber
//           this.Employee.permanentAddressLine1 = this.Employee.currentAddressLine1
//           this.Employee.permanentAddressLine2 = this.Employee.currentAddressLine2
//           this.Employee.permanentCity = this.Employee.currentCity
//           this.Employee.permanentState = this.Employee.currentState
//           this.Employee.permanentZip = this.Employee.currentZip
//         })
//    }

//    else {
//     this.employeeService.getemployee().subscribe(resp=>{
//       this.Employee = resp[0]
//     })
//    }
// }


// copyCurrentToEmergency(event) {
//   console.log(event.target.checked)
//   if ( event.target.checked ) {
      
//       console.log("yes")
//       this.employeeService.getemployee().subscribe(resp=>{
//         this.Employee = resp[0]
//         this.Employee.emergencyName = this.Employee.addressName
//         this.Employee.emergencyNumber = this.Employee.addressNumber
//         this.Employee.emergencyAddressLine1 = this.Employee.currentAddressLine1
//         this.Employee.emergencyAddressLine2 = this.Employee.currentAddressLine2
//         this.Employee.emergencyCity = this.Employee.currentCity
//         this.Employee.emergencyState = this.Employee.currentState
//         this.Employee.emergencyZip = this.Employee.currentZip
//       })
//  }

//  else {
//   this.employeeService.getemployee().subscribe(resp=>{
//     this.Employee = resp[0]
//   })
//  }
// }

// copyPermanentToEmergency(event) {
//   console.log(event.target.checked)
//   if ( event.target.checked ) {
      
//       console.log("yes")
//       this.employeeService.getemployee().subscribe(resp=>{
//         this.Employee = resp[0]
//         this.Employee.emergencyName = this.Employee.permanentName
//         this.Employee.emergencyNumber = this.Employee.permanentNumber
//         this.Employee.emergencyAddressLine1 = this.Employee.permanentAddressLine1
//         this.Employee.emergencyAddressLine2 = this.Employee.permanentAddressLine2
//         this.Employee.emergencyCity = this.Employee.permanentCity
//         this.Employee.emergencyState = this.Employee.permanentState
//         this.Employee.emergencyZip = this.Employee.permanentZip
//       })
//  }

//  else {
//   this.employeeService.getemployee().subscribe(resp=>{
//     this.Employee = resp[0]
//   })
//  }
// }

}

