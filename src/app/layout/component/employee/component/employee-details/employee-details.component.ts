import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { EmployeeData } from '../../models/EmployeeData';
import { testing } from '../../models/testing';
import { AppResponse } from 'src/app/models/appResponse';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  addressName:string;
  
  Employee: any={}

  Status=false

  dangerStatus = false;
  successStatus = false;
  message = '';
  id;

  constructor(private employeeService: EmployeeService, private router: Router) {

    console.log(this.Employee)

    this.Employee=this.employeeService.Employee

    this.id = "53a845f3-c35f-4d07-a0b4-c0aa719cd0ae"



    this.employeeService.getParticularEmployee(this.id).subscribe(resp => {
      console.log(resp);
     
      if (resp.Success) {
        this.Employee = resp.Data;
        var date = this.Employee.DateOfJoining
        var answer=date.substr(0,10)
        this.Employee.DateOfJoining=answer
        this.Status=true
        
      } else {
        this.dangerStatus = true;
        this.successStatus = false;
        this.message = resp.ErrorMessage;
        this.message = resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      if (error.status === 400) {
        this.dangerStatus = true;
        this.successStatus = false;
        this.message = error.message;
       
      } else if (error.status === 401) {
        this.dangerStatus = true;
        this.successStatus = false;
        this.message = 'Authorization has been denied for this request And You have to Login again.';
        setTimeout(() => {    
              this.router.navigate(['/login']);
            }, 3000);
      } else {
        this.dangerStatus = true;
        this.successStatus = false;
        this.message = error.message;
      }
    }
  );
  



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

