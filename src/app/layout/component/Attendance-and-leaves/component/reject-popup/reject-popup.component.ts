import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ShiftTimeService } from '../../service/shift-time.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { AppResponse } from 'src/app/models/appResponse';


@Component({
  selector: 'app-reject-popup',
  templateUrl: './reject-popup.component.html',
  styleUrls: ['./reject-popup.component.css']
})
export class RejectPopupComponent implements OnInit {

  Reject ={
    reasonForRejecting:null
  }

  UpdateTimeShift={}
  message;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<RejectPopupComponent>,
    private shiftTimeService: ShiftTimeService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService
  ) {

    console.log(data.Id)



   }

  ngOnInit() {
  }
  onSubmit(reject) {


    this.UpdateTimeShift={
      Id: this.data.Id,
      Status: 4,
      ApprovedBy: JSON.parse(sessionStorage.getItem('user')).Id,
      StatusReason: reject.reasonForRejecting
    }

    console.log(this.UpdateTimeShift)

    this.shiftTimeService.UpdateTimeShiftData(this.UpdateTimeShift).subscribe(resp => {

      if(resp.Success)
      {
        this.message="Data is Updated successfully"
        this.customToastrService.GetSuccessToastr(this.message, "Shift Update Status", 5000)
        this.close()
      }
      else
      {
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Shift Update Status", 5000)
      }

    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Shift Update Status")

}
)
   
  }
  close()
  {
    this.dialogRef.close();
  }


}
