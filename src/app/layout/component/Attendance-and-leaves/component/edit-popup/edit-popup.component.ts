import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ShiftTimeService } from '../../service/shift-time.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { AppResponse } from 'src/app/models/appResponse';
import { AttendanceService } from '../../service/attendance.service';
import { EditAttendance } from '../../models/EditAttendance';


@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit {

  EditAttendance = {} as EditAttendance;
  dropdownList:any[]=[];
  Id;
  message;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<EditPopupComponent>,
    private shiftTimeService: ShiftTimeService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService,
    private attendanceService: AttendanceService,

  ) 
  {

    this.Id=JSON.parse(sessionStorage.getItem('user')).Id;

    //this.Id="53a845f3-c35f-4d07-a0b4-c0aa719cd0ae";

    this.shiftTimeService.ApprovedByStatus(this.Id).subscribe(resp => {
      console.log(resp);

      if (resp.Success) {
        this.dropdownList = resp.Data;
      } else {

        this.message = resp.ErrorMessage;
        this.message = resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Edit Attendance Status", 5000)

      }

    }
    ,   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"Edit Attendance Status")

    }
  );



   }

  ngOnInit() {
  }
  onSubmit(editattendance) {
    this.Id = JSON.parse(sessionStorage.getItem('user')).Id;

    //this.Id="53a845f3-c35f-4d07-a0b4-c0aa719cd0ae";

    editattendance.EmployeeId = this.Id;
    editattendance.Status = 2;
    // editattendance.StartTime = editattendance.StartTime + ":00"
    // editattendance.EndTime = editattendance.EndTime + ":00"
    console.log(editattendance)


    this.attendanceService.attendanceDataEdit(editattendance).subscribe(resp => {

      if(resp.Success)
      {
        this.message="Data is Added successfully"

        this.customToastrService.GetSuccessToastr(this.message, "Edit Attendance Status", 5000)
      }

      else
      {
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Edit Attendance Status", 5000)

      }

    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Edit Attendance Status")

}
)
  }

  close()
  {
    this.dialogRef.close();
  }

}
