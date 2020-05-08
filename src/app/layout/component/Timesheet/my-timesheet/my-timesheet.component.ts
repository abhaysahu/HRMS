import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-my-timesheet',
  templateUrl: './my-timesheet.component.html',
  styleUrls: ['./my-timesheet.component.css']
})
export class MyTimesheetComponent implements OnInit {

  Timesheet: any[]=[];

  

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit(timesheet)
  {
    console.log(timesheet)

  }

  AddOrEditOrderItem(orderItemIndex, orderid)
  {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={orderItemIndex, orderid}
    this.dialog.open(CommentsComponent, dialogConfig).afterClosed().subscribe(res =>{
      
    });
  }

}
