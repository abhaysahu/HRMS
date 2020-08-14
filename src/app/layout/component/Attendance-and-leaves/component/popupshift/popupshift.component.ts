import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ShiftTimeService } from '../../service/shift-time.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { AppResponse } from 'src/app/models/appResponse';

@Component({
  selector: 'app-popupshift',
  templateUrl: './popupshift.component.html',
  styleUrls: ['./popupshift.component.css']
})
export class PopupshiftComponent implements OnInit {

  MyShifts: any[] = [];
  dropdownList:any[]=[];
  shiftPersonal: any[]=[];
  message;
  Id;


  constructor(

    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PopupshiftComponent>,
    private shiftTimeService: ShiftTimeService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService

  ) {

    // this.Id=JSON.parse(sessionStorage.getItem('user')).Id;

    this.Id="53a845f3-c35f-4d07-a0b4-c0aa719cd0ae";


    this.shiftTimeService.ApprovedByStatus(this.Id).subscribe(resp => {
      console.log(resp);

      if (resp.Success) {
        this.dropdownList = resp.Data;
      } else {

        this.message = resp.ErrorMessage;
        this.message = resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Shift Save Status", 5000)

      }

    }
    ,   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"Shift Save Status")

    }
  );

   }

  ngOnInit() {
  }

  onSubmit(myshifts) {

    // this.Id = JSON.parse(sessionStorage.getItem('user')).Id;

    this.Id="53a845f3-c35f-4d07-a0b4-c0aa719cd0ae";

    myshifts.EmployeeId = this.Id;
    myshifts.Status = 2;
    console.log(myshifts)


    this.shiftTimeService.shiftTimeDataSave(myshifts).subscribe(resp => {

      if(resp.Success)
      {
        this.message="Data is Added successfully"

        this.customToastrService.GetSuccessToastr(this.message, "Shift Save Status", 5000)
      }

      else
      {
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Shift Save Status", 5000)

      }

    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Shift Save Status")

}
)

  }

  close()
  {
    this.dialogRef.close();
  }

}
