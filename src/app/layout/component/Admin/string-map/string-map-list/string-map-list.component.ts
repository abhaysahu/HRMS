import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material';


@Component({
  selector: 'app-string-map-list',
  templateUrl: './string-map-list.component.html',
  styleUrls: ['./string-map-list.component.css']
})
export class StringMapListComponent implements OnInit {

  constructor(private dialog: MatDialog){}

  ngOnInit() {
  }
  AddOrEditOrderItem()
  { const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={}
    this.dialog.open(PopupComponent, dialogConfig).afterClosed().subscribe(res =>{
      
    });
  }
}
