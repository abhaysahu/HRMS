import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { AppResponse } from 'src/app/models/appResponse';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  copy = false

  Employee: any={}

  Status=false

  dangerStatus = false;
  successStatus = false;
  message = '';
  id

  constructor(private employeeService: EmployeeService, private router: Router,private route: ActivatedRoute,) { 

    this.Employee=this.employeeService.Employee

    this.id = this.route.snapshot.paramMap.get('id');



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

  Basic(employee)
  {
    console.log(employee)
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
