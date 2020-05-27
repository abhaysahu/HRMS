import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { StringMapService } from '../../service/string-map.service';
import { StringMapList } from '../../model/stringMapList.module';
import { AppResponse } from 'src/app/models/appResponse';
import { DropDownList } from '../../model/dropdownLIst';

export class stringMapList  { 

  EntityName:string;
  AttributeName:string;
  CountStringMap:number;
}


@Component({
  selector: 'app-string-map-list',
  templateUrl: './string-map-list.component.html',
  styleUrls: ['./string-map-list.component.css']
})


export class StringMapListComponent implements OnInit {

  stringMapList: stringMapList[]=[]
  dropdownList: DropDownList[]=[];
  ascNumberSort = true;
  indexs:any[]=[];
  
  sortIcon1="fa fa-sort"
  sortIcon2="fa fa-sort"
  sortIcon3="fa fa-sort"

  email="";

  aa:boolean=false;
  search="";


  successStatus=false;
  dangerStatus=false;
  message="";

  objectTypeCode=0;

  constructor(private dialog: MatDialog,
              private stringmapService: StringMapService,
              ){  

    this.stringmapService.getdropdownData().subscribe(resp =>{
   
      if(resp.Success)
      {
        this.dropdownList = resp.Data
       
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
  
  
  setIndex(ii){
    this.aa=ii;
  }


  AddOrEditOrderItem(stringMapList)
  { 

    //console.log(stringMapList)

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
    this.stringmapService.stringMapGetList(this.objectTypeCode).subscribe(resp =>{
      console.log(resp)
      if(resp.Success)
      {
        this.stringMapList = resp.Data
        
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.ErrorMessage;
      }
      
    }
    ,   (error: AppResponse) => {
      if(error.status === 400)
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = error.message;
    
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
    this.dangerStatus=false;
    this.successStatus=false;
  }


  sortFilter(value)
  {
    this.disable();

    if(value == 1)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon1="fa fa-sort-desc"
        this.stringMapList=this.stringMapList.sort((a,b)=>a.EntityName.localeCompare(b.EntityName)); // For ascending sort
      } 
      else 
      {
        this.sortIcon1="fa fa-sort-asc"
        this.stringMapList=this.stringMapList.sort((a,b)=>b.EntityName.localeCompare(a.EntityName)); // For descending sort
      }
    }

    else if(value == 2)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon2="fa fa-sort-desc"
        this.stringMapList=this.stringMapList.sort((a,b)=>a.AttributeName.localeCompare(b.AttributeName)); // For ascending sort
      } 
      else 
      {
        this.sortIcon2="fa fa-sort-asc"
        this.stringMapList=this.stringMapList.sort((a,b)=>b.AttributeName.localeCompare(a.AttributeName)); // For descending sort
      }
    }

    else if(value == 3)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon3="fa fa-sort-desc"
        this.stringMapList=this.stringMapList.sort((a,b)=>a.CountStringMap - b.CountStringMap); // For ascending sort
      } 
      else 
      {
        this.sortIcon3="fa fa-sort-asc"
        this.stringMapList=this.stringMapList.sort((a,b)=>b.CountStringMap - a.CountStringMap); // For descending sort
      }
    }

  }
  disable()
  {
    this.sortIcon1="fa fa-sort"
    this.sortIcon2="fa fa-sort"
    this.sortIcon3="fa fa-sort"
  }


}
