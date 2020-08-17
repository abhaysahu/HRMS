import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { EmployeeData } from '../../models/EmployeeData';
import { testing } from '../../models/testing';
import { AppResponse } from 'src/app/models/appResponse';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ResetPopupComponent } from '../reset-popup/reset-popup.component';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  copy = false

  Employee: any = {}
  permanentAddress: any = {}
  currentAddress: any = {}
  emergencyAddress: any = {}
  officeAddress: any = {}

  dropdownListOfCountry: any[] = [];
  dropdownListOfState: any[] = [];


  dropdownListOfAddressType: any[] = [];

  Status = false

  dangerStatus = false;
  successStatus = false;
  message = '';
  id

  constructor(
    private dialog: MatDialog,

    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private errorHandlingService: ErrorHandlingService,
    private customToastrService: CustomToastrService

  ) {

    this.Employee = this.employeeService.Employee

    this.id = "94943514-be17-49e3-82da-65dbf9f6dc81"

    // get Employee data

    this.employeeService.getParticularEmployee(this.id).subscribe(resp => {
      console.log(resp);

      if (resp.Success) {
        this.Employee = resp.Data;
        if(this.Employee==null)
        {
          this.customToastrService.GetInfoToastr("No Record Found!!..", "No Data", 5000);
        }
        else
        {
          var date = this.Employee.DateOfJoining
          var answer = date.substr(0, 10)
          this.Employee.DateOfJoining = answer
          this.Status = true


          if(this.Employee.Department==null)
          {
            this.Employee.Department="N/N"
          }
          else
          {
            this.Employee.Department=this.Employee.Department.Text
          }


          if(this.Employee.Designation==null)
          {
            this.Employee.Designation="N/N"
          }
          else
          {
            this.Employee.Designation=this.Employee.Designation.Text
          }

          if(this.Employee.Gender==null)
          {
            this.Employee.Gender="N/N"
          }
          else
          {
            this.Employee.Gender=this.Employee.Gender.Text
          }


          if(this.Employee.Grade==null)
          {
            this.Employee.Grade="N/N"
          }
          else
          {
            this.Employee.Grade=this.Employee.Grade.Text
          }

          if(this.Employee.MaritalStatus==null)
          {
            this.Employee.MaritalStatus="N/N"
          }
          else
          {
            this.Employee.MaritalStatus=this.Employee.MaritalStatus.Text
          }

          if(this.Employee.Status==null)
          {
            this.Employee.Status="N/N"
          }
          else
          {
            this.Employee.Status=this.Employee.Status.Text
          }
 
          console.log(this.Employee)
        }
        
      } else {
        // this.dangerStatus = true;
        // this.successStatus = false;
        this.message = resp.ErrorMessage;
        this.message = resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)
      }

    }
      , (error: AppResponse) => {

        this.errorHandlingService.errorStatus(error, "Edit Employee Status")
      }
    );


    // get list of Conuntry for add or update the Address

    this.employeeService.listOfCountry().subscribe(resp => {
      console.log(resp);

      if (resp.Success) {
        this.dropdownListOfCountry = resp.Data;
      } else {
        // this.dangerStatus = true;
        // this.successStatus = false;
        this.message = resp.ErrorMessage;
        this.message = resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

      }

    }
      , (error: AppResponse) => {

        this.errorHandlingService.errorStatus(error, "Edit Employee Status")

      }
    );


    // get list of Conuntry for add or update the Address

    this.employeeService.listOfState().subscribe(resp => {
      console.log(resp);

      if (resp.Success) {
        this.dropdownListOfState = resp.Data;
      } else {
        // this.dangerStatus = true;
        // this.successStatus = false;
        this.message = resp.ErrorMessage;
        this.message = resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

      }

    }
      , (error: AppResponse) => {

        this.errorHandlingService.errorStatus(error, "Edit Employee Status")

      }
    );


    // Get permanent Address

    this.employeeService.UserEditDetails(this.id, 1).subscribe(resp => {
      if (resp.Success) {
        if (resp.Data == null) {
          console.log("yes")
          this.permanentAddress = []
        }
        else {
          this.permanentAddress = resp.Data[0]
          this.permanentAddress.CountryId = this.permanentAddress.Country.Id
          this.permanentAddress.StateProvinceId = this.permanentAddress.StateProvince.Id

          this.employeeService.CopyOfPermanentAddress = this.permanentAddress
        }

      }
      else {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = resp.ErrorMessage;
        this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

      }

    }
      , (error: AppResponse) => {
        this.errorHandlingService.errorStatus(error, "Edit Employee Status")

      }
    )


    //  Get Current Address


    this.employeeService.UserEditDetails(this.id, 2).subscribe(resp => {
      if (resp.Success) {
        if (resp.Data == null) {
          console.log("yes")
          this.currentAddress = []
        }
        else {
          this.currentAddress = resp.Data[0]
          this.currentAddress.CountryId = this.currentAddress.Country.Id
          this.currentAddress.StateProvinceId = this.currentAddress.StateProvince.Id
          console.log(this.currentAddress)
        }

      }
      else {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = resp.ErrorMessage;
        this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

      }

    }
      , (error: AppResponse) => {
        this.errorHandlingService.errorStatus(error, "Edit Employee Status")

      }
    )


    // get office Address


    this.employeeService.UserEditDetails(this.id, 3).subscribe(resp => {
      if (resp.Success) {
        if (resp.Data == null) {
          console.log("yes")
          this.officeAddress = []
        }
        else {
          this.officeAddress = resp.Data[0]
          this.officeAddress.CountryId = this.officeAddress.Country.Id
          this.officeAddress.StateProvinceId = this.officeAddress.StateProvince.Id
          console.log(this.officeAddress)
        }

      }
      else {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = resp.ErrorMessage;
        this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

      }

    }
      , (error: AppResponse) => {
        this.errorHandlingService.errorStatus(error, "Edit Employee Status")

      }
    )

    // emergency

    this.employeeService.UserEditDetails(this.id, 4).subscribe(resp => {
      if (resp.Success) {
        if (resp.Data == null) {
          console.log("yes")
          this.emergencyAddress = []
        }
        else {
          this.emergencyAddress = resp.Data[0]
          this.emergencyAddress.CountryId = this.emergencyAddress.Country.Id
          this.emergencyAddress.StateProvinceId = this.emergencyAddress.StateProvince.Id
          console.log(this.emergencyAddress)
        }

      }
      else {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = resp.ErrorMessage;
        this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

      }

    }
      , (error: AppResponse) => {
        this.errorHandlingService.errorStatus(error, "Edit Employee Status")

      }
    )
  }



  ngOnInit() {
  }



  Basic(employee) {
    console.log(employee)
  }

  // save and update the permanent address

  Permanent(permanent) {

    permanent.AddressType = 1;
    permanent.RegardingObjectId = this.id;
    permanent.Email = ""
    permanent.Company = ""

    console.log(permanent)

    this.permanentAddress = permanent

    if (permanent.Id) {

      console.log("Update API")

      this.employeeService.UserAddressUpdate(permanent).subscribe(resp => {
        if (resp.Success) {

          this.message = "Data is Update successfully"
          this.customToastrService.GetSuccessToastr(this.message, "Employee details", 3000)

        }
        else {

          this.message = resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)
        }
      }
        , (error: AppResponse) => {
          this.errorHandlingService.errorStatus(error, "Edit Employee Status")

        }
      )
    }
    else {
      console.log("call new address")

      this.employeeService.UserAddressSave(permanent).subscribe(resp => {
        if (resp.Success) {

          this.message = "Data is Added successfully"
          this.customToastrService.GetSuccessToastr(this.message, "Employee details", 3000)

        }
        else {

          this.message = resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)
        }
      }
        , (error: AppResponse) => {
          this.errorHandlingService.errorStatus(error, "Edit Employee Status")

        }
      )
    }


  }


  Current(current) {

    current.AddressType = 2;
    current.RegardingObjectId = this.id;
    current.Email = ""
    current.Company = ""

    console.log(current)
    this.currentAddress = current

    if (current.Id) {
      console.log("update Api")

      this.employeeService.UserAddressUpdate(current).subscribe(resp => {

        if (resp.Success) {

          this.message = "Data is Update successfully"
          this.customToastrService.GetSuccessToastr(this.message, "Employee details", 3000)

        }
        else {

          this.message = resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

        }

      }
        , (error: AppResponse) => {
          this.errorHandlingService.errorStatus(error, "Edit Employee Status")

        }
      )

    }
    else {
      console.log("call new address")

      this.employeeService.UserAddressSave(current).subscribe(resp => {

        if (resp.Success) {

          this.message = "Data is Added successfully"
          this.customToastrService.GetSuccessToastr(this.message, "Employee details", 3000)

        }
        else {

          this.message = resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

        }

      }
        , (error: AppResponse) => {
          this.errorHandlingService.errorStatus(error, "Edit Employee Status")

        }
      )

    }

  }


  Office(office) {
    office.AddressType = 3;
    office.RegardingObjectId = this.id;
    office.Email = ""
    office.Company = ""

    console.log(office)
    this.officeAddress = office

    if (office.Id) {
      console.log("update Api")

      this.employeeService.UserAddressUpdate(office).subscribe(resp => {

        if (resp.Success) {

          this.message = "Data is update successfully"
          this.customToastrService.GetSuccessToastr(this.message, "Employee details", 3000)

        }
        else {

          this.message = resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

        }

      }
        , (error: AppResponse) => {
          this.errorHandlingService.errorStatus(error, "Edit Employee Status")

        }
      )

    }

    else {
      console.log("call new address")

      this.employeeService.UserAddressSave(office).subscribe(resp => {

        if (resp.Success) {

          this.message = "Data is Added successfully"
          this.customToastrService.GetSuccessToastr(this.message, "Employee details", 3000)

        }
        else {

          this.message = resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

        }

      }
        , (error: AppResponse) => {
          this.errorHandlingService.errorStatus(error, "Edit Employee Status")

        }
      )
    }
  }


  Emergency(emergency) {
    emergency.AddressType = 4;
    emergency.RegardingObjectId = this.id;
    emergency.Email = ""
    emergency.Company = ""


    console.log(emergency)

    this.emergencyAddress = emergency

    if (emergency.Id) {
      console.log("update Api")

      this.employeeService.UserAddressUpdate(emergency).subscribe(resp => {

        if (resp.Success) {

          this.message = "Data is Update successfully"
          this.customToastrService.GetSuccessToastr(this.message, "Employee details", 3000)
        }
        else {

          this.message = resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

        }

      }
        , (error: AppResponse) => {
          this.errorHandlingService.errorStatus(error, "Edit Employee Status")
        }
      )

    }
    else {
      console.log("call new address")

      this.employeeService.UserAddressSave(emergency).subscribe(resp => {

        if (resp.Success) {

          this.message = "Data is Added successfully"
          this.customToastrService.GetSuccessToastr(this.message, "Employee details", 3000)

        }
        else {

          this.message = resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

        }

      }
        , (error: AppResponse) => {
          this.errorHandlingService.errorStatus(error, "Edit Employee Status")
        }
      )
    }


  }


  copyCurrentToPermanent(event) {

    console.log(event.target.checked)
    if (event.target.checked) {

      this.permanentAddress.FullName = this.currentAddress.FullName
      this.permanentAddress.PhoneNumber = this.currentAddress.PhoneNumber
      this.permanentAddress.Address1 = this.currentAddress.Address1
      this.permanentAddress.Address2 = this.currentAddress.Address2
      this.permanentAddress.Landmark = this.currentAddress.Landmark
      this.permanentAddress.CountryId = this.currentAddress.CountryId
      this.permanentAddress.StateProvinceId = this.currentAddress.StateProvinceId
      this.permanentAddress.City = this.currentAddress.City
      this.permanentAddress.ZipPostalCode = this.currentAddress.ZipPostalCode
    }


    else {
      this.getPermanent()

      // console.log(this.employeeService.CopyOfPermanentAddress)

      // this.permanentAddress=this.employeeService.CopyOfPermanentAddress
      // console.log(this.permanentAddress)
    }
  }


  copyCurrentToEmergency(event) {
    console.log(event.target.checked)
    if (event.target.checked) {

      console.log("yes")

      this.emergencyAddress.FullName = this.currentAddress.FullName
      this.emergencyAddress.PhoneNumber = this.currentAddress.PhoneNumber
      this.emergencyAddress.Address1 = this.currentAddress.Address1
      this.emergencyAddress.Address2 = this.currentAddress.Address2
      this.emergencyAddress.Landmark = this.currentAddress.Landmark
      this.emergencyAddress.CountryId = this.currentAddress.CountryId
      this.emergencyAddress.StateProvinceId = this.currentAddress.StateProvinceId
      this.emergencyAddress.City = this.currentAddress.City
      this.emergencyAddress.ZipPostalCode = this.currentAddress.ZipPostalCode


    }

    else {
      this.getEmergency()
    }
  }



  copyPermanentToEmergency(event) {
    console.log(event.target.checked)
    if (event.target.checked) {

      console.log("yes")

      this.emergencyAddress.FullName = this.permanentAddress.FullName
      this.emergencyAddress.PhoneNumber = this.permanentAddress.PhoneNumber
      this.emergencyAddress.Address1 = this.permanentAddress.Address1
      this.emergencyAddress.Address2 = this.permanentAddress.Address2
      this.emergencyAddress.Landmark = this.permanentAddress.Landmark
      this.emergencyAddress.CountryId = this.permanentAddress.CountryId
      this.emergencyAddress.StateProvinceId = this.permanentAddress.StateProvinceId
      this.emergencyAddress.City = this.permanentAddress.City
      this.emergencyAddress.ZipPostalCode = this.permanentAddress.ZipPostalCode


    }

    else {
      this.getEmergency()
    }
  }



  getPermanent() {
    this.employeeService.UserEditDetails(this.id, 1).subscribe(resp => {
      if (resp.Success) {
        if (resp.Data == null) {
          console.log("yes")
          this.permanentAddress = []
        }
        else {
          this.permanentAddress = resp.Data[0]
          this.permanentAddress.CountryId = this.permanentAddress.Country.Id
          this.permanentAddress.StateProvinceId = this.permanentAddress.StateProvince.Id
          console.log(this.permanentAddress)
        }

      }
      else {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = resp.ErrorMessage;
        this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

      }

    }
      , (error: AppResponse) => {
        this.errorHandlingService.errorStatus(error, "Edit Employee Status")

      }
    )
  }


  getCurrent() {
    this.employeeService.UserEditDetails(this.id, 2).subscribe(resp => {
      if (resp.Success) {
        if (resp.Data == null) {
          console.log("yes")
          this.currentAddress = []
        }
        else {
          this.currentAddress = resp.Data[0]
          this.currentAddress.CountryId = this.currentAddress.Country.Id
          this.currentAddress.StateProvinceId = this.currentAddress.StateProvince.Id
          console.log(this.currentAddress)
        }

      }
      else {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = resp.ErrorMessage;
        this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

      }

    }
      , (error: AppResponse) => {
        this.errorHandlingService.errorStatus(error, "Edit Employee Status")

      }
    )
  }

  getEmergency() {

    this.employeeService.UserEditDetails(this.id, 4).subscribe(resp => {
      if (resp.Success) {
        if (resp.Data == null) {
          console.log("yes")
          this.emergencyAddress = []
        }
        else {
          this.emergencyAddress = resp.Data[0]
          this.emergencyAddress.CountryId = this.emergencyAddress.Country.Id
          this.emergencyAddress.StateProvinceId = this.emergencyAddress.StateProvince.Id
          console.log(this.emergencyAddress)
        }

      }
      else {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = resp.ErrorMessage;
        this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)
      }

    }
      , (error: AppResponse) => {
        this.errorHandlingService.errorStatus(error, "Edit Employee Status")

      }
    )
  }

  getoffice() {
    this.employeeService.UserEditDetails(this.id, 3).subscribe(resp => {
      if (resp.Success) {
        if (resp.Data == null) {
          console.log("yes")
          this.officeAddress = []
        }
        else {
          this.officeAddress = resp.Data[0]
          this.officeAddress.CountryId = this.officeAddress.Country.Id
          this.officeAddress.StateProvinceId = this.officeAddress.StateProvince.Id
          console.log(this.officeAddress)
        }

      }
      else {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message = resp.ErrorMessage;
        this.customToastrService.GetErrorToastr(this.message, "Employee details", 5000)

      }

    }
      , (error: AppResponse) => {
        this.errorHandlingService.errorStatus(error, "Edit Employee Status")
      }
    )
  }

  ResetPopup()
  {
    let Id = JSON.parse(sessionStorage.getItem('user')).Id;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="40%";
    // dialogConfig.height="40%";
    dialogConfig.data={Id}
    this.dialog.open(ResetPopupComponent, dialogConfig).afterClosed().subscribe(res =>{

    });
  }

}
