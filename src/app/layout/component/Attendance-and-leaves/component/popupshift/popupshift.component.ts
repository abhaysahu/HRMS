import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-popupshift',
  templateUrl: './popupshift.component.html',
  styleUrls: ['./popupshift.component.css']
})
export class PopupshiftComponent implements OnInit {

  MyShifts: any[] = [];


  constructor(

    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PopupshiftComponent>,


  ) { }

  ngOnInit() {
  }
  onSubmit(myshifts) {
    console.log(myshifts)
  }

  close()
  {
    this.dialogRef.close();
  }

}
