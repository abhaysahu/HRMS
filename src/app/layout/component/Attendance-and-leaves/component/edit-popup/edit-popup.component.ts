import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit {

  EditAttendance = {}

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<EditPopupComponent>,
  ) { }

  ngOnInit() {
  }
  onSubmit(editattendance) {
    console.log(editattendance)
  }

  close()
  {
    this.dialogRef.close();
  }

}
