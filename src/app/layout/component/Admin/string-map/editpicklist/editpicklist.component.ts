import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UpdatePopup } from '../model/Updatepopup.modeule';


@Component({
  selector: 'app-editpicklist',
  templateUrl: './editpicklist.component.html',
  styleUrls: ['./editpicklist.component.css']
})


export class EditpicklistComponent implements OnInit {

  editpicklist: UpdatePopup

 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<EditpicklistComponent>,
  
  ) { 

    console.log(data)
  }

  ngOnInit() {

    this.editpicklist = this.data

  }

  close()
  {
    this.dialogRef.close();
  }

  submit(editpicklist)
  {
    console.log(editpicklist)
  }
  

}
