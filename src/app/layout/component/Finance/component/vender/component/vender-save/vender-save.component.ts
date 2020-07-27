import { Component, OnInit } from '@angular/core';

import { AppResponse } from 'src/app/models/appResponse';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { Vender } from '../../model/vender';
import { VenderService } from '../../service/vender.service';


@Component({
  selector: 'app-vender-save',
  templateUrl: './vender-save.component.html',
  styleUrls: ['./vender-save.component.css']
})
export class VenderSaveComponent implements OnInit {

  vender: Vender;

  // successStatus=false;
  // dangerStatus=false;
  message="";
  venderService: any;
  // dropdownList: DropDownList[]=[];


  constructor(private entityService: VenderService, private errorHandlingService: ErrorHandlingService,
     private customToastrService: CustomToastrService,
    ) {

    // this.vender = {

    //   // Name: null,
    //   // Category: null,
    //   // SchemaName: "dbo",
    //   // // ObjectTypeCode: null,
    //   // Description: "",
    //   // IsMasterEntity: true,
    //   // PrimaryAttribute: null,
    //   // PrimaryKey: null,
    // }

    this.vender = {

      Name: null,
      Category: null,
      AddressLine1: null,
      AddressLine2: null,
      City: null,
      Zip: null,
      PrimaryContactPerson: null,
      PrimaryContactPersonEmail: null,
      PrimaryContactPersonPhone: null,


    }


  }

  ngOnInit() {
  }


  VenderData(vender)
  {
    this.venderService.venderDataSave(vender).subscribe(resp => {

      if(resp.Success)
      {
        // this.successStatus=true;
        // this.dangerStatus=false;
        this.message="Data is Added successfully"

        this.customToastrService.GetSuccessToastr(this.message, "Employer Save Status", 5000)


        setTimeout(()=>
        {

          // this.successStatus=false;
          // this.dangerStatus=false;

          this.vender =
          {

              Name: null,
              Category: null,
              AddressLine1: null,
              AddressLine2: null,
              City: null,
              Zip: null,
              PrimaryContactPerson: null,
              PrimaryContactPersonEmail: null,
              PrimaryContactPersonPhone: null,
          }

        }, 3000);
      }
      else
      {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message=resp.Message;
      }

    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Employer Status")

}
)


  }

  closeStatus()
  {
    // this.dangerStatus=false;
    // this.successStatus=false;
  }
}

