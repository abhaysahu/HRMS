import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Comments } from '../model/comment.model';
import { TimesheetService } from '../service/timesheet.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  formData: Comments;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<CommentsComponent>,
    private timesheetService: TimesheetService
  ) { }

  ngOnInit() {

   
      console.log(this.data)
      this.formData = {
        commentId: this.data.commentId,
        hour: this.data.hour,
        comment: this.data.comment,
      }

  }

  close()
  {
    this.dialogRef.close();
  }


  onSubmit(form)
  {
    console.log(form);
    this.dialogRef.close();

    if(form.commentId == 1)
    {
      this.timesheetService.timesheet[this.data.index].monefforts = form.hour;
      this.timesheetService.timesheet[this.data.index].mondesc = form.comment;
    }
     
    else if(form.commentId == 2)
    {
      this.timesheetService.timesheet[this.data.index].tusefforts = form.hour;
      this.timesheetService.timesheet[this.data.index].tusdesc = form.comment;
    }

    else if(form.commentId == 3)
    {
      this.timesheetService.timesheet[this.data.index].wedefforts = form.hour;
      this.timesheetService.timesheet[this.data.index].weddesc = form.comment;
    }

    else if(form.commentId == 4)
    {
      this.timesheetService.timesheet[this.data.index].thuefforts = form.hour;
      this.timesheetService.timesheet[this.data.index].thudesc = form.comment;
    }

    else if(form.commentId == 5)
    {
      this.timesheetService.timesheet[this.data.index].friefforts = form.hour;
      this.timesheetService.timesheet[this.data.index].fridesc = form.comment;
    }
    
    else if(form.commentId == 6)
    {
      this.timesheetService.timesheet[this.data.index].satefforts = form.hour;
      this.timesheetService.timesheet[this.data.index].satdesc = form.comment;
    }

    else if(form.commentId == 7)
    {
      this.timesheetService.timesheet[this.data.index].sunefforts = form.hour;
      this.timesheetService.timesheet[this.data.index].sundesc = form.comment;
    }
              
  }


  

}
