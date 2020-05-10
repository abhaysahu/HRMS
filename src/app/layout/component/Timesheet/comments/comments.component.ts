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
      console.log(this.data)
      this.formData = {
        
        commentId: this.data.commentId,
        hour: this.data.hour,
        comment: '',
        status: 1
      }
     
    }
    else 
    {
      console.log(this.data)
      this.formData = Object.assign({},this.timesheetService.comment[this.data.iteration]);
      console.log(this.formData)
    }


  }

  close()
  {
    this.dialogRef.close();
  }


  onSubmit(form)
  {
    console.log(form);
      if(this.data.status == 0)
      {
        console.log("push")
        this.timesheetService.comment.push(form);
      }
      else
      {
        this.timesheetService.comment[this.data.orderItemIndex] = form;
        
      }

      //this.dialogRef.close();
      
    
  }


  

}
