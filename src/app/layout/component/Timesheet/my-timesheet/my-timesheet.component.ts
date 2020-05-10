import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CommentsComponent } from '../comments/comments.component';
import { TimesheetService } from '../service/timesheet.service';

@Component({
  selector: 'app-my-timesheet',
  templateUrl: './my-timesheet.component.html',
  styleUrls: ['./my-timesheet.component.css']
})
export class MyTimesheetComponent implements OnInit {

  Timesheet: any[]=[];

  

  constructor(private dialog: MatDialog,
    private timesheetService: TimesheetService,

    ) { }

  ngOnInit() {
  }

  onSubmit(timesheet)
  {
    console.log(timesheet)

  }

  AddOrEditOrderItem(commentId,hour)
  {
    console.log("yes")

    console.log(this.timesheetService.comment.length)

    let iteration=0
    let status=0;

    for(iteration=0; iteration<this.timesheetService.comment.length; iteration++)
    {
      if(this.timesheetService.comment[iteration].commentId == commentId)
      {
        status=this.timesheetService.comment[iteration].status
        break;
      }
      else
      {
        status=0;
      }
    }
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={commentId, status, iteration,hour}
    this.dialog.open(CommentsComponent, dialogConfig).afterClosed().subscribe(res =>{
      
    });
  }

}
