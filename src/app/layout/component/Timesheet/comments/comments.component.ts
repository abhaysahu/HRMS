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

    if(this.data.status == 0)
    {
      console.log("yes")
      console.log(this.data)
     
    }
    else 
    {
      console.log(this.data)
      
    }


  }

  close()
  {
    this.dialogRef.close();
  }




  

}
