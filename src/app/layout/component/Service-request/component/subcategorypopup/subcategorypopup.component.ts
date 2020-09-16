import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-subcategorypopup',
  templateUrl: './subcategorypopup.component.html',
  styleUrls: ['./subcategorypopup.component.css']
})
export class SubcategorypopupComponent implements OnInit {
  SubCategory= {} as SubcategorypopupComponent;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<SubcategorypopupComponent>
  ) { }

  ngOnInit() {
  }

  onSubmit(subcategory) {
    console.log(subcategory)
  }

  close()
  {
    this.dialogRef.close();
  }


}
