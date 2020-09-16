import { Component, OnInit } from '@angular/core';
import { AddSr } from '../../models/add_sr';
import { ServiceRequestsService } from '../../service/service-requests.service';
import { AppResponse } from 'src/app/models/appResponse';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';

@Component({
  selector: 'app-add-sr',
  templateUrl: './add-sr.component.html',
  styleUrls: ['./add-sr.component.css']
})
export class AddSRComponent implements OnInit {
  Sr ={} as AddSr;
  dropDownListOfCategory:any[]=[]
  dropDownListOfSubCategory:any[]=[]
  dropDownListOfPriority:any[]=[]
  dropDownListOfApprovalBy:any[]=[]


  message;

  constructor(
    private requestsService: ServiceRequestsService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService
    ) {


    this.requestsService.listOfFunction().subscribe(resp => {
      console.log(resp);

      if (resp.Success) {
        this.dropDownListOfCategory = resp.Data;
      } else {

        this.message = resp.ErrorMessage;
        this.message = resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Add Service Request Status", 5000)

      }
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Add Service Request Status")
    }
  );


  this.requestsService.listOfSubFunction().subscribe(resp => {
    console.log(resp);

    if (resp.Success) {
      this.dropDownListOfSubCategory = resp.Data;
    } else {

      this.message = resp.ErrorMessage;
      this.message = resp.Message;
      this.customToastrService.GetErrorToastr(this.message, "Add Service Request Status", 5000)

    }
  }
  ,   (error: AppResponse) => {
    this.errorHandlingService.errorStatus(error,"Add Service Request Status")
  }
);



this.requestsService.listOfPriority().subscribe(resp => {
  console.log(resp);

  if (resp.Success) {
    this.dropDownListOfPriority = resp.Data;
  } else {

    this.message = resp.ErrorMessage;
    this.message = resp.Message;
    this.customToastrService.GetErrorToastr(this.message, "Add Service Request Status", 5000)

  }
}
,   (error: AppResponse) => {
  this.errorHandlingService.errorStatus(error,"Add Service Request Status")
}
);


  }

  ngOnInit() {
  }
  onSubmit(sr) {

    this.requestsService.serviceRequestDataSave(sr).subscribe(resp => {

      if(resp.Success)
      {
        this.message="Service Request is Added successfully"

        this.customToastrService.GetSuccessToastr(this.message, "Service Request Status", 5000)
      }

      else
      {
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Service Request Status", 5000)

      }

    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Service Request Status")

}
)

  }
}

