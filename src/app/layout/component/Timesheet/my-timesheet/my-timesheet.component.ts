import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CommentsComponent } from '../comments/comments.component';
import { TimesheetService } from '../service/timesheet.service';
import { Timesheet } from '../model/timesheet.model';

@Component({
  selector: 'app-my-timesheet',
  templateUrl: './my-timesheet.component.html',
  styleUrls: ['./my-timesheet.component.css']
})
export class MyTimesheetComponent implements OnInit {

  Timesheet: any=[]

  formData: Timesheet;

  

  constructor(private dialog: MatDialog,
    private timesheetService: TimesheetService,

    ) { 

      this.timesheetService.timesheet = this.Timesheet


      // this.timesheetService.getdata().subscribe(data =>{
      //   console.log("yes")
      //   this.Timesheet = data
      //   this.timesheetService.timesheet = this.Timesheet
      //   console.log(this.Timesheet)
      // })
    }

  ngOnInit() {
  }

  onSubmit(timesheet)
  {
    console.log(timesheet)

  }

  AddOrEditOrderItem(commentId,hour,index,comment)
  {
    // console.log("inder")


    // console.log(this.timesheetService.comment.length)

    // let iteration=0
    // let status=0;

    // for(iteration=0; iteration<this.timesheetService.comment.length; iteration++)
    // {
    //   if(this.timesheetService.comment[iteration].commentId == commentId)
    //   {
    //     status=this.timesheetService.comment[iteration].status
    //     break;
    //   }
    //   else
    //   {
    //     status=0;
    //   }
    // }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={commentId,hour,index,comment}
    this.dialog.open(CommentsComponent, dialogConfig).afterClosed().subscribe(res =>{
      
    });
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

    this.timesheetService.timesheet.push(this.formData);
    console.log(this.timesheetService.timesheet)
    
  }

}
