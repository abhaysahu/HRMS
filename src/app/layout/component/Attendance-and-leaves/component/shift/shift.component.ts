import { Component, OnInit } from '@angular/core';
// import { PopupComponent } from '../popup/popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopupshiftComponent } from '../popupshift/popupshift.component';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {
  dialog: any;

  constructor() { }

  ngOnInit() {
  }
  AddOrEditOrderItem(shift)
  {


    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={shift}
    this.dialog.open(PopupshiftComponent, dialogConfig).afterClosed().subscribe(res =>{


    });
  }

}
