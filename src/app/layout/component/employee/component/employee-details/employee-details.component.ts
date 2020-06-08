import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { EmployeeData } from '../../models/EmployeeData';
import { testing } from '../../models/testing';
import { AppResponse } from 'src/app/models/appResponse';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  copy = false

  Employee: any={}
  permanentAddress: any={}
  currentAddress: any={}
  officeAddress: any={}
  emergencyAddress: any={}
  

  dropdownListOfCountry: any[] = [];
  dropdownListOfState: any[] = [];


  dropdownListOfAddressType: any[] = [];

  Status=false

  dangerStatus = false;
  successStatus = false;
  message = '';
  id

  constructor(private employeeService: EmployeeService, 
    private router: Router,
    private route: ActivatedRoute,
    private errorHandlingService: ErrorHandlingService
    ) { 

    this.Employee=this.employeeService.Employee

    this.id = "53a845f3-c35f-4d07-a0b4-c0aa719cd0ae"

    // get Employee data

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
      this.errorHandlingService.errorStatus(error,"Details Employee Status")

    }
  );


  // get list of Conuntry for add or update the Address

  this.employeeService.listOfCountry().subscribe(resp => {
    console.log(resp);
   
    if (resp.Success) {
      this.dropdownListOfCountry = resp.Data;
    } else {
      this.dangerStatus = true;
      this.successStatus = false;
      this.message = resp.ErrorMessage;
      this.message = resp.Message;
    }
    
  }
  ,   (error: AppResponse) => {
    this.errorHandlingService.errorStatus(error,"Details Employee Status")

  }
);


// get list of Conuntry for add or update the Address

this.employeeService.listOfState().subscribe(resp => {
  console.log(resp);
 
  if (resp.Success) {
    this.dropdownListOfState = resp.Data;
  } else {
    this.dangerStatus = true;
    this.successStatus = false;
    this.message = resp.ErrorMessage;
    this.message = resp.Message;
  }
  
}
,   (error: AppResponse) => {
  this.errorHandlingService.errorStatus(error,"Details Employee Status")

}
);


  // Get permanent Address 

  this.employeeService.UserEditDetails(this.id,1).subscribe(resp =>{
    if(resp.Success)
    {
      if(resp.Data==null)
      {
        console.log("yes")
        this.permanentAddress = []
      }
      else
      {
        this.permanentAddress = resp.Data[0]
        this.permanentAddress.CountryId = this.permanentAddress.Country.Id
        this.permanentAddress.StateProvinceId = this.permanentAddress.StateProvince.Id
        console.log(this.permanentAddress)
      }
      
    }
    else
    {
      this.dangerStatus=true;
      this.successStatus=false;
      this.message=resp.ErrorMessage;
    }
    
  }
  ,   (error: AppResponse) => {
    this.errorHandlingService.errorStatus(error,"Details Employee Status")

  }
)


//  Get Current Address

this.employeeService.UserEditDetails(this.id,2).subscribe(resp =>{
  if(resp.Success)
  {
    if(resp.Data==null)
    {
      console.log("yes")
      this.currentAddress = []
    }
    else
    {
      this.currentAddress = resp.Data[0]
      this.currentAddress.CountryId = this.currentAddress.Country.Id
      this.currentAddress.StateProvinceId = this.currentAddress.StateProvince.Id
      console.log(this.permanentAddress)
    }
    
  }
  else
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message=resp.ErrorMessage;
  }
  
}
,   (error: AppResponse) => {
  this.errorHandlingService.errorStatus(error,"Details Employee Status")

}
)


// get office Address


this.employeeService.UserEditDetails(this.id,3).subscribe(resp =>{
  if(resp.Success)
  {
    if(resp.Data==null)
    {
      console.log("yes")
      this.officeAddress = []
    }
    else
    {
      this.officeAddress = resp.Data[0]
      this.officeAddress.CountryId = this.officeAddress.Country.Id
      this.officeAddress.StateProvinceId = this.officeAddress.StateProvince.Id
      console.log(this.officeAddress)
    }
    
  }
  else
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message=resp.ErrorMessage;
  }
  
}
,   (error: AppResponse) => {
  this.errorHandlingService.errorStatus(error,"Details Employee Status")

}
)

// emergency

this.employeeService.UserEditDetails(this.id,4).subscribe(resp =>{
  if(resp.Success)
  {
    if(resp.Data==null)
    {
      console.log("yes")
      this.emergencyAddress = []
    }
    else
    {
      this.emergencyAddress = resp.Data[0]
      this.emergencyAddress.CountryId = this.emergencyAddress.Country.Id
      this.emergencyAddress.StateProvinceId = this.emergencyAddress.StateProvince.Id
      console.log(this.emergencyAddress)
    }
    
  }
  else
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message=resp.ErrorMessage;
  }
  
}
,   (error: AppResponse) => {
  this.errorHandlingService.errorStatus(error,"Details Employee Status")

}
)



  }

  ngOnInit() {
  }

  Basic(employee)
  {
    console.log(employee)
  }

  // save and update the the permanent address

  Permanent(permanent)
  {
    permanent.AddressType  = 1;
    permanent.RegardingObjectId = this.id;
    permanent.Email=""
	  permanent.Company=""

    console.log(permanent)

    this.employeeService.UserAddressSave(permanent).subscribe(resp =>{
      // console.log(resp)
      if(resp.Success)
      {
        this.successStatus=true;
        this.dangerStatus=false;
        this.message="Data is Added successfully"
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Details Employee Status")

    }
  )
    
  }


  Current(current)
  {
    current.AddressType  = 2;
    current.RegardingObjectId = this.id;
    current.Email=""
	  current.Company=""

    console.log(current)

    this.employeeService.UserAddressSave(current).subscribe(resp =>{
      // console.log(resp)
      if(resp.Success)
      {
        this.successStatus=true;
        this.dangerStatus=false;
        this.message="Data is Added successfully"
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Details Employee Status")

    }
  )

  }


  Office(office)
  {
    office.AddressType  = 3;
    office.RegardingObjectId = this.id;
    office.Email=""
	  office.Company=""

    console.log(office)

    this.employeeService.UserAddressSave(office).subscribe(resp =>{
      // console.log(resp)
      if(resp.Success)
      {
        this.successStatus=true;
        this.dangerStatus=false;
        this.message="Data is Added successfully"
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Details Employee Status")

    }
  )

  }


  Emergency(emergency)
  {
    emergency.AddressType  = 4;
    emergency.RegardingObjectId = this.id;
    emergency.Email=""
    emergency.Company=""
    

    console.log(emergency)

    this.employeeService.UserAddressSave(emergency).subscribe(resp =>{
      // console.log(resp)
      if(resp.Success)
      {
        this.successStatus=true;
        this.dangerStatus=false;
        this.message="Data is Added successfully"
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Details Employee Status")

    }
  )

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

