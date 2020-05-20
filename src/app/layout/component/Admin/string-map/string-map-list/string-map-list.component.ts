import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { StringMapService } from '../service/string-map.service';
import { StringMapList } from '../model/stringMapList.module';
import { AppResponse } from 'src/app/models/appResponse';
import { DropDownList } from '../model/dropdownLIst';


@Component({
  selector: 'app-string-map-list',
  templateUrl: './string-map-list.component.html',
  styleUrls: ['./string-map-list.component.css']
})
export class StringMapListComponent implements OnInit {

  stringMapList: StringMapList[]=[];
  dropdownList: DropDownList[]=[];
  status=false;
  message="";

  objectTypeCode=0;

  constructor(private dialog: MatDialog,
              private stringmapService: StringMapService,
              ){                


    this.stringmapService.getdropdownData().subscribe(resp =>{
      console.log(resp)
      if(resp.Success)
      {
        this.dropdownList = resp.Data
        console.log(this.dropdownList)
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

  AddOrEditOrderItem(stringMapList)
  { 


    // console.log(typeCode)

    console.log(stringMapList)

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={stringMapList}
    this.dialog.open(PopupComponent, dialogConfig).afterClosed().subscribe(res =>{
     
      
    });
  }

  getList(event)
  {
    this.objectTypeCode = event.target.value

    console.log(this.objectTypeCode)

    this.stringmapService.stringMapGetList(this.objectTypeCode).subscribe(resp =>{
      console.log(resp)
      if(resp.Success)
      {
        this.stringMapList = resp.Data
        console.log(this.stringMapList)
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
}
