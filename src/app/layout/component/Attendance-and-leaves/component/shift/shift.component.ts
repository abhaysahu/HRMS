import { Component, OnInit, Inject } from '@angular/core';
// import { PopupComponent } from '../popup/popup.component';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PopupshiftComponent } from '../popupshift/popupshift.component';
import { ShiftTimeService } from '../../service/shift-time.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { AppResponse } from 'src/app/models/appResponse';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {


  MyShiftList: any[]=[];
  message;
  Id;
 

  constructor(
    private dialog: MatDialog,
    private shiftTimeService: ShiftTimeService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService
  ) {

    // this.Id=JSON.parse(sessionStorage.getItem('user')).Id;

    this.Id="53a845f3-c35f-4d07-a0b4-c0aa719cd0ae";


    this.shiftTimeService.GetMyShiftTimeList(this.Id,2).subscribe(resp => {
      console.log(resp);
     
      if (resp.Success) {
        this.MyShiftList = resp.Data;
      } else {
        
        this.message = resp.ErrorMessage;
        this.message = resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "My Shift List Status", 5000)

      }
      
    }
    ,   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"My Shift List Status")

    }
  );
   }

  ngOnInit() {
  }
  ShiftPopup()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={}
    this.dialog.open(PopupshiftComponent, dialogConfig).afterClosed().subscribe(res =>{

    });
  }

}
