import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Popup } from '../model/popup/popup.module';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  Popup: any=[]

  formData: Popup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PopupComponent>,
    /*private timesheetService: TimesheetService*/
  ) { }

  ngOnInit() {
  }
  close()
  {
    this.dialogRef.close();
  }
  AddProject(){

    this.formData = {
        
      id:3,
      projectid: 0,
      date: '',
      monefforts: 0,
      mondesc:'',
      tusefforts: 0,
      tusdesc: '',
      wedefforts: 0,
      weddesc: '',
      thuefforts: 0,
      thudesc: '',
      friefforts: 0,
      fridesc: '',
      satefforts: 0,
      satdesc: '',
      sunefforts: 0,
      sundesc: '',
      status: 0
    }

    /*this.timesheetService.timesheet.push(this.formData);
    console.log(this.timesheetService.timesheet)*/
  }

}
