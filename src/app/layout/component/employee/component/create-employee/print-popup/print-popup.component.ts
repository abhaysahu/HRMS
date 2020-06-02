import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CommentsComponent } from 'src/app/layout/component/Timesheet/component/comments/comments.component';

@Component({
  selector: 'app-print-popup',
  templateUrl: './print-popup.component.html',
  styleUrls: ['./print-popup.component.css']
})
export class PrintPopupComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<PrintPopupComponent>,) {

    console.log(data)
   }

  ngOnInit() {


  }


  close()
  {
    this.dialogRef.close();
  }


  onPrint()
  {
    window.print()
  }

}
