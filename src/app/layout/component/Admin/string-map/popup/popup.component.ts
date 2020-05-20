import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Popup } from '../model/popup.module';
import { StringMapService } from '../service/string-map.service';
import { ListOfPopup } from '../model/listOfPopup.module';
import { AppResponse } from 'src/app/models/appResponse';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {


  listOfPopup: ListOfPopup[]=[]

  status=false;
  message="";

  formData: Popup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PopupComponent>,
    private stringmapService: StringMapService
  ) { 


    console.log(this.data)
    let attributeName = this.data.stringMapList.AttributeName;
    let objectTypeCode = this.data.typeCode;

    console.log(attributeName)
    console.log(objectTypeCode)

    this.stringmapService.getDataOfPopup(attributeName, objectTypeCode).subscribe(resp => {
      console.log(resp)
      if(resp.Success)
      {
        this.listOfPopup = resp.Data
        console.log(this.listOfPopup)
      }
      else
      {
        this.status=true;
        this.message=resp.ErrorMessage;
      }
      
    }
    ,   (error: AppResponse) => {
      if(error.status === 400)
      {
       this.message = error.message
       console.log(this.message)
      }
      else if(error.status === 401)
      {
        this.status=true;
        this.message = "Authorization has been denied for this request And You have to Login again."
      }       
       else
       {
          this.status=true;
          this.message = error.message;
       }
}
)
    
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
    console.log(Popup)
  }

  onAttribute(AttributeName, index)
  {
    console.log(AttributeName)
    console.log(index)

    console.log(this.listOfPopup[index])

    

  }

}
