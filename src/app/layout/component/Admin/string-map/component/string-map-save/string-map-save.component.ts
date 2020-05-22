import { Component, OnInit } from '@angular/core';
import { StringMapService } from '../../service/string-map.service';
import { combineLatest } from 'rxjs';
import { AppResponse } from 'src/app/models/appResponse';
import { DropDownList } from '../../model/dropdownLIst';
import { savePickList } from '../../model/savePickList';

@Component({
  selector: 'app-string-map-save',
  templateUrl: './string-map-save.component.html',
  styleUrls: ['./string-map-save.component.css']
})
export class StringMapSaveComponent implements OnInit {

  stringMap: savePickList={
    Value:null,
    AttributeValue:null,
    AttributeName:null,
    SortOrder:null,
    ObjectTypeCode:null,
    Description:null,
    IsActive:true

  }

  dropdownList: DropDownList[]=[];

  successStatus=false;
  dangerStatus=false;
  message="";

  constructor(private stringMapService: StringMapService) { 

    

    this.stringMapService.getdropdownData().subscribe(resp =>{
   
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

  StringMapData(stringMap)
  {

    console.log(stringMap)
    this.stringMapService.stringMapDataSave(stringMap).subscribe(resp =>{
      // console.log(resp)
      if(resp.Success)
      {
        this.successStatus=true;
        this.dangerStatus=false;
        this.message="Data is Added successfully"
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      if(error.status === 400)
      {
       this.message = error.message
      //  console.log(this.message)
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

}
