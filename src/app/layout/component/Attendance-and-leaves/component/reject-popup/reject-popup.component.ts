import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-reject-popup',
  templateUrl: './reject-popup.component.html',
  styleUrls: ['./reject-popup.component.css']
})
export class RejectPopupComponent implements OnInit {

  Reject: any[]=[];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<RejectPopupComponent>,
  ) { }

  ngOnInit() {
  }
  onSubmit(reject) {
    console.log(reject)
  }
  close()
  {
    this.dialogRef.close();
  }


}
