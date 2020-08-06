import { Component, OnInit, Inject } from '@angular/core';
// import { PopupComponent } from '../popup/popup.component';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PopupshiftComponent } from '../popupshift/popupshift.component';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {
 

  constructor(
    private dialog: MatDialog,

  ) { }

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
