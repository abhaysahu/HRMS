import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CommentsComponent } from '../comments/comments.component';
import { TimesheetService } from '../../service/timesheet.service';
import { Timesheet } from '../../model/timesheet.model';

@Component({
  selector: 'app-my-timesheet',
  templateUrl: './my-timesheet.component.html',
  styleUrls: ['./my-timesheet.component.css']
})
export class MyTimesheetComponent implements OnInit {

  Timesheet: any=[]

  formData: Timesheet;

  dateResult: any[]=[];

  

  constructor(private dialog: MatDialog,
    private timesheetService: TimesheetService,

    ) { 


      var result = [];
      //var dd = new Date('06-08-2020');
      console.log(d)

      for (let i=0; i<7; i++) 
      {
       
        var d = new Date('06-25-2020');
      
        d.setDate(d.getDate()+i);

        var finalDate = (d.toDateString())

        console.log(finalDate)

        let date={
          Week: finalDate.substr(0,3),
          Month: finalDate.substr(4,3),
          Date: finalDate.substr(8,2)
        }
        this.dateResult.push(date)
      }

      console.log(this.dateResult)

      this.timesheetService.timesheet = this.Timesheet

    }

  ngOnInit() {
  }

  onSubmit(timesheet)
  {
    console.log(timesheet)

  }

  AddOrEditOrderItem(commentId,hour,index,comment)
  {
    

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
