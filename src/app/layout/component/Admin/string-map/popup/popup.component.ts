import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';

import { StringMapService } from '../service/string-map.service';
import { ListOfPopup } from '../model/listOfPopup.module';
import { AppResponse } from 'src/app/models/appResponse';
import { UpdatePopup } from '../model/Updatepopup.modeule';
import { CommentsComponent } from '../../../Timesheet/comments/comments.component';
import { EditpicklistComponent } from '../editpicklist/editpicklist.component';




@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {


  listOfPopup: ListOfPopup[]=[]

  status=false;
  message="";

  updatePopup: UpdatePopup;
 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PopupComponent>,

    private stringmapService: StringMapService,

    private dialog: MatDialog
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

  UpDate(value,attributeValue,attributeName,sortOrder,description,isActive)
  {

    // this.dialogRef.close();

    let id = JSON.parse(sessionStorage.getItem('user')).Id

    this.updatePopup = {
      id:id,
      Value:value,
      AttributeValue:attributeValue,
      AttributeName:attributeName,
      SortOrder:sortOrder,
      ObjectTypeCode:this.data.typeCode,
      Description:description,
      IsActive:isActive
    }

    console.log(this.updatePopup)

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data=this.updatePopup
    this.dialog.open(EditpicklistComponent, dialogConfig).afterClosed().subscribe(res =>{
      
    });
  
  }


  AddProject(data)
  {
    console.log(data)

    let id = JSON.parse(sessionStorage.getItem('user')).Id

    this.updatePopup = {
      id:id,
      Value:null,
      AttributeValue:null,
      AttributeName:data.AttributeName,
      SortOrder:null,
      ObjectTypeCode:this.data.typeCode,
      Description:data.Description,
      IsActive:true
    }

    console.log(this.updatePopup)

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data=this.updatePopup
    this.dialog.open(EditpicklistComponent, dialogConfig).afterClosed().subscribe(res =>{
      
    });
  

  }



}
