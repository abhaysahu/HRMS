import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Popup } from '../model/popup.module';
import { StringMapService } from '../service/string-map.service';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  Popup: Popup[]=[]

  formData: Popup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PopupComponent>,
    private stringmapService: StringMapService
  ) { 

    this.Popup = this.stringmapService.stringMapPopup
  }

  ngOnInit() {
    
  }
  close()
  {
    this.dialogRef.close();
  }
  AddProject(){

    this.formData = {        
      Name:"",
      Value:0,
      Order:0,
      Status:true
    }
    this.stringmapService.stringMapPopup.push(this.formData);
    console.log(this.stringmapService.stringMapPopup)
    
  }


  onSubmit(Popup)
  {
    console.log(this.stringmapService.stringMapPopup)
 

  }

}
