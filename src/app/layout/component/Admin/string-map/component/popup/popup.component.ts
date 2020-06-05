import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';

import { StringMapService } from '../../service/string-map.service';
import { ListOfPopup } from '../../model/listOfPopup.module';
import { AppResponse } from 'src/app/models/appResponse';
import { UpdatePopup } from '../../model/Updatepopup.modeule';
import { CommentsComponent } from '../../../../Timesheet/component/comments/comments.component';
import { EditpicklistComponent } from '../editpicklist/editpicklist.component';




@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {


  listOfPopup: ListOfPopup[]=[]

  successStatus=false;
  dangerStatus=false;

  message="";

  updatePopup: UpdatePopup;

  
 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PopupComponent>,

    private stringmapService: StringMapService,

    private dialog: MatDialog
  ) { 

    let attributeName = this.data.stringMapList.AttributeName;
    let objectTypeCode = this.data.stringMapList.ObjectTypeCode;

    this.stringmapService.getDataOfPopup(attributeName, objectTypeCode).subscribe(resp => {
      if(resp.Success)
      {
        this.listOfPopup = resp.Data
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.ErrorMessage;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      if(error.status === 400)
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = error.message
      }
      else if(error.status === 401)
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = "Authorization has been denied for this request And You have to Login again."
      }       
       else
       {
          this.dangerStatus=true;
          this.successStatus=false;
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


  UpDate(value,attributeValue,attributeName,sortOrder,description,isActive,id,objectTypeCode)
  {

    this.updatePopup = {
      Id:id,
      Value:value,
      AttributeValue:attributeValue,
      AttributeName:attributeName,
      SortOrder:sortOrder,
      ObjectTypeCode:objectTypeCode,
      Description:description,
      IsActive:isActive
    }

    // console.log(this.updatePopup)

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data=[this.updatePopup, id]
    this.dialog.open(EditpicklistComponent, dialogConfig).afterClosed().subscribe(res =>{
      this.refresh()
    });
  
  }


  AddProject(data)
  {

    // console.log(data)

    this.updatePopup = {
      Id:"",
      Value:null,
      AttributeValue:null,
      AttributeName:data.AttributeName,
      SortOrder:null,
      ObjectTypeCode:data.ObjectTypeCode,
      Description:"",
      IsActive:true
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data=[this.updatePopup]
    this.dialog.open(EditpicklistComponent, dialogConfig).afterClosed().subscribe(res =>{
      this.refresh()
      
    });
  
  }



  refresh()
  {
    let attributeName = this.data.stringMapList.AttributeName;
    let objectTypeCode = this.data.stringMapList.ObjectTypeCode;

    this.stringmapService.getDataOfPopup(attributeName, objectTypeCode).subscribe(resp => {
      if(resp.Success)
      {
        this.listOfPopup = resp.Data
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.ErrorMessage;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      if(error.status === 400)
      {
       this.message = error.message
      }
      else if(error.status === 401)
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = "Authorization has been denied for this request And You have to Login again."
      }       
       else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = error.message;
      }
}
)
  }

  closeStatus()
  {
    this.dangerStatus=true;
    this.successStatus=false;
  }
}
