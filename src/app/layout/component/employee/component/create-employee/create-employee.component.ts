import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { AppResponse } from 'src/app/models/appResponse';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CommentsComponent } from '../../../Timesheet/component/comments/comments.component';
import { PrintService } from '../../services/print.service';
import { PrintPopupComponent } from './print-popup/print-popup.component';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { Employee } from '../../models/employee';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  Employee = {} as Employee

  dropdownListOfUser: any[] = [];
  dropdownListOfDepartment: any[] = [];
  dropdownListOfDesignation: any[] = [];
  dropdownListOfMaritalStatus: any[] = [];
  dropdownListOfGender: any[] = [];
  dropdownListOfStatus: any[] = [];
  dropdownListOfGrade: any[] = [];



  dangerStatus = false;
  successStatus = false;
  message = '';
  redirectId;


  constructor(
    private router: Router, 
    private employeeService: EmployeeService, 
    private dialog: MatDialog,
    public printService: PrintService,
    private errorHandlingService: ErrorHandlingService
    
    ) {




                
    this.employeeService.employeeGrade().subscribe(resp => {
      console.log(resp);
     
      if (resp.Success) {
        this.dropdownListOfGrade = resp.Data;
      } else {
        this.dangerStatus = true;
        this.successStatus = false;
        this.message = resp.ErrorMessage;
        this.message = resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {

            this.errorHandlingService.errorStatus(error,"Create Employee Status")

    }
  );

  

    this.employeeService.employeeStatus().subscribe(resp => {
      console.log(resp);
     
      if (resp.Success) {
        this.dropdownListOfStatus = resp.Data;
      } else {
        this.dangerStatus = true;
        this.successStatus = false;
        this.message = resp.ErrorMessage;
        this.message = resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"Create Employee Status")

    }
  );
  



    this.employeeService.getUser().subscribe(resp => {
      console.log(resp);
     
      if (resp.Success) {
        this.dropdownListOfUser = resp.Data;
      } else {
        this.dangerStatus = true;
        this.successStatus = false;
        this.message = resp.ErrorMessage;
        this.message = resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {

        this.errorHandlingService.errorStatus(error,"Create Employee Status")

    }
  );
  
  


    
    this.employeeService.listOfDepartment().subscribe(resp => {
    console.log(resp);
   
    if (resp.Success) {
      this.dropdownListOfDepartment = resp.Data;
    } else {
      this.dangerStatus = true;
      this.successStatus = false;
      this.message = resp.ErrorMessage;
      this.message = resp.Message;
    }
    
  }
  ,   (error: AppResponse) => {

    this.errorHandlingService.errorStatus(error,"Create Employee Status")

  }
);



    this.employeeService.listOfDesignation().subscribe(resp => {
  console.log(resp);
   
  if (resp.Success) {
    this.dropdownListOfDesignation = resp.Data;
  } else {
    this.dangerStatus = true;
    this.successStatus = false;
    this.message = resp.ErrorMessage;
    this.message = resp.Message;
  }
  
}
,   (error: AppResponse) => {
    
    this.errorHandlingService.errorStatus(error,"Create Employee Status")

}
);

    this.employeeService.listOfMaritalStatus().subscribe(resp => {
  console.log(resp);
   
  if (resp.Success) {
    this.dropdownListOfMaritalStatus = resp.Data;
  } else {
    this.dangerStatus = true;
    this.successStatus = false;
    this.message = resp.ErrorMessage;
    this.message = resp.Message;
  }
  
}
,   (error: AppResponse) => {

  this.errorHandlingService.errorStatus(error,"Create Employee Status")

}
);


    this.employeeService.listOfGender().subscribe(resp => {
  console.log(resp);
   
  if (resp.Success) {
    this.dropdownListOfGender = resp.Data;
  } else {
    this.dangerStatus = true;
    this.successStatus = false;
    this.message = resp.ErrorMessage;
    this.message = resp.Message;
  }
  
}
,   (error: AppResponse) => {
              
    this.errorHandlingService.errorStatus(error,"Create Employee Status")

}
);

}


  ngOnInit() {
  }


  Basic(employee) {
    console.log(employee);
    let id = 3;
    employee.CreatedBy = JSON.parse(sessionStorage.getItem('user')).Id;
    this.employeeService.UserDataSave(employee).subscribe(resp => {
      // console.log(resp)
      if (resp.Success) {
        this.successStatus = true;
        this.dangerStatus = false;
        this.message = 'Data is Added successfully';

        console.log(resp)
        this.redirectId=resp.Id
        this.onPrint(resp)

      } else {
        this.dangerStatus = true;
        this.successStatus = false;
        this.message = resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {

        this.errorHandlingService.errorStatus(error,"Create Employee Status")

    }
  );
  }


 onPrint(PrintData) {

   console.log("yes")

   console.log(PrintData)

   let prints={
    FullName:PrintData.FullName,
    LoginId:PrintData.LoginId,
    Password:PrintData.Password
  }

  //  this.router.navigate(['/print/print/1']);

  // const invoiceIds = ['101', '102'];
  //   this.printService
  //     .printDocument('invoice', invoiceIds);

  


  const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.height="99%";
    dialogConfig.data={prints}
    this.dialog.open(PrintPopupComponent, dialogConfig).afterClosed().subscribe(res =>{

      console.log(res)

      this.router.navigate([`/dashboard/edit/employee/${this.redirectId}`]);



      
    });



 }
  closeStatus() {
    this.dangerStatus = false;
    this.successStatus = false;
  }


}
