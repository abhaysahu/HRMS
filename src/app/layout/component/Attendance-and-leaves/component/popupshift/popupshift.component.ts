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
  shiftStatus: any[]=[];
  message;


  constructor(

    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PopupshiftComponent>,
    private shiftTimeService: ShiftTimeService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService
    


  ) {

   }

  ngOnInit() {
  }
  onSubmit(myshifts) {
    let id = JSON.parse(sessionStorage.getItem('user')).Id;

    myshifts.EmployeeId = id
    console.log(myshifts)
  }

  close()
  {
    this.dialogRef.close();
  }

}
