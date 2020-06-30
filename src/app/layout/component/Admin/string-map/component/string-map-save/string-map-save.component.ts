import { Component, OnInit } from '@angular/core';
import { StringMapService } from '../../service/string-map.service';
import { combineLatest } from 'rxjs';
import { AppResponse } from 'src/app/models/appResponse';
import { DropDownList } from '../../model/dropdownLIst';
import { savePickList } from '../../model/savePickList';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';

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

  // successStatus=false;
  // dangerStatus=false;
  message="";

  constructor(
    private stringMapService: StringMapService, 
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService
    ) { 

    

    this.stringMapService.getdropdownData().subscribe(resp =>{
   
      if(resp.Success)
      {
        this.dropdownList = resp.Data
       
      }
      else
      {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message=resp.ErrorMessage;
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "StringMap Save Status", 5000)

      }
      
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Login Status")

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
        // this.successStatus=true;
        // this.dangerStatus=false;
        this.message="Data is Added successfully"
        this.customToastrService.GetSuccessToastr(this.message, "StringMap Save Status", 5000)

      }
      else
      {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "StringMap Save Status", 5000)

      }
      
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"StringMap Save Status")

    }
  )
}

  closeStatus()
  {
    // this.dangerStatus=false;
    // this.successStatus=false;
  }

}
