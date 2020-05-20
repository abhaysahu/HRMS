

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-editpicklist',
  templateUrl: './editpicklist.component.html',
  styleUrls: ['./editpicklist.component.css']
})


export class EditpicklistComponent implements OnInit {

 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<EditpicklistComponent>,
  
  ) { }

  ngOnInit() {

  }

  close()
  {
    this.dialogRef.close();
  }
  

}
