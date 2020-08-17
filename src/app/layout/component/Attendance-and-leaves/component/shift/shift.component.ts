import { Component, OnInit, Inject } from '@angular/core';
// import { PopupComponent } from '../popup/popup.component';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PopupshiftComponent } from '../popupshift/popupshift.component';
import { ShiftTimeService } from '../../service/shift-time.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { AppResponse } from 'src/app/models/appResponse';
import { RejectPopupComponent } from '../reject-popup/reject-popup.component';

export class MyShifts {
  StartTime: number
  EndTime: number
  CreatedOn: number
  ApprovingStatus: string
  ApprovingPerson: string
  ApprovedBy: string
}


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {
  ascNumberSort = true;
  indexs:any[]=[];
  dropDownListOfShiftStatus:any[]=[];
  length=1;

  message="";
  pendingValue:number;
  email="";
  


  MyShiftList: any[]=[];
  MyApprovalList:any[]=[];
  myshift:MyShifts[]=[];

  sortIcon1="fa fa-sort"
  sortIcon2="fa fa-sort"
  sortIcon3="fa fa-sort"
  sortIcon4="fa fa-sort"
  sortIcon5="fa fa-sort"
  sortIcon6="fa fa-sort"

  UpdateTimeShift={}
  Id;

  constructor(
    private dialog: MatDialog,
    private shiftTimeService: ShiftTimeService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService
  ) {


    // this.Id=JSON.parse(sessionStorage.getItem('user')).Id;

    this.Id="53a845f3-c35f-4d07-a0b4-c0aa719cd0ae";

    this.shiftTimeService.ShiftsStatus().subscribe(resp =>{

      if(resp.Success)
      {
        let data ={
          Value: 0, 
          Text: "All"
        }
        this.dropDownListOfShiftStatus = resp.Data
        this.dropDownListOfShiftStatus.push(data)
        this.dropDownListOfShiftStatus=this.dropDownListOfShiftStatus.sort((a,b)=>a.Value - b.Value);
        this.pendingValue = 2
        console.log(this.dropDownListOfShiftStatus)

        this.getListOfShift(2);
      }
      else
      {
        this.message=resp.ErrorMessage;
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "StringMap List Status", 5000)
      }

    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"String Map List")

}
)

  }

  ngOnInit() {
  }


  getListOfShift(StatusValue)
  {
    this.Id="53a845f3-c35f-4d07-a0b4-c0aa719cd0ae";

    this.length=1
    this.shiftTimeService.GetMyShiftTimeList(this.Id,StatusValue).subscribe(resp => {
      console.log(resp);

      if (resp.Success) {
        this.MyShiftList = resp.Data;
        if(this.MyShiftList==null)
        {
          console.log("yes")
          this.length=0
        }

        console.log(this.MyShiftList)
        this.removeNullValue(this.MyShiftList)

      } else {

        this.message = resp.ErrorMessage;
        this.message = resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "My Shift List Status", 5000)

      }

    }
    ,   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"My Shift List Status")

    }
  );
  }


  removeNullValue(myShiftList)
  {

    console.log(this.MyShiftList)
    if(this.length!=0)
    {
      for (let i=0; i<this.MyShiftList.length; i++)
    {

      this.MyShiftList[i].CreatedOn=new Date(this.MyShiftList[i].CreatedOn).toDateString().substr(4,13)

      if(this.MyShiftList[i].ApprovalPerson!=null)
      {
        this.MyShiftList[i].ApprovalPerson=this.MyShiftList[i].ApprovalPerson.Name
      }

      if(this.MyShiftList[i].ApprovedBy!=null)
      {
        this.MyShiftList[i].ApprovedBy=this.MyShiftList[i].ApprovedBy.Name
      }

      if(this.MyShiftList[i].AprovingStatus!=null)
      {
        this.MyShiftList[i].AprovingStatus=this.MyShiftList[i].AprovingStatus.Text
      }
    }

    console.log(this.MyShiftList)
    }

    else
    {
      this.customToastrService.GetInfoToastr("There is no Matching record for this Request", "Shift Request", 5000)
    }
    
  }



  ShiftPopup()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={}
    this.dialog.open(PopupshiftComponent, dialogConfig).afterClosed().subscribe(res =>{

    });
  }

  getTheDataOfMyShift()
  {
    this.Id="53a845f3-c35f-4d07-a0b4-c0aa719cd0ae";

    this.length=1
    this.dropDownListOfShiftStatus=this.dropDownListOfShiftStatus.sort((a,b)=>a.Value - b.Value);
    this.pendingValue = 2
    this.shiftTimeService.GetMyShiftTimeList(this.Id,2).subscribe(resp => {
      console.log(resp);

      if (resp.Success) {
        this.MyShiftList = resp.Data;
        if(this.MyShiftList==null)
        {
          console.log("yes")
          this.length=0
        }

        this.removeNullValue(this.MyShiftList)
      } else {

        this.customToastrService.GetErrorToastr(this.message, "My Shift List Status", 5000)

      }

    }
    ,   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"My Shift List Status")

    }
  );
  }

  getTheDataOfMyApproval(StatusCode)
  {
    this.Id="72fecddb-fcfa-4afb-a8ec-7c0a3839e7c5";
    // this.Id=JSON.parse(sessionStorage.getItem('user')).Id;
    console.log(StatusCode)

    this.length=1
    this.dropDownListOfShiftStatus=this.dropDownListOfShiftStatus.sort((a,b)=>a.Value - b.Value);
    this.pendingValue = StatusCode

    this.shiftTimeService.GetAwaitingMyApprovalList(this.Id,StatusCode).subscribe(resp => {
      console.log(resp);

      if (resp.Success) 
      {
        this.MyApprovalList = resp.Data;

        if(this.MyApprovalList==null)
        {
          this.length=0;
          this.customToastrService.GetInfoToastr("There is no Matching record for this Request", "Shift Request", 5000)
        }
        else
        {
          for(let i=0;i<this.MyApprovalList.length;i++)
          {
            this.MyApprovalList[i].CreatedOn=new Date(this.MyApprovalList[i].CreatedOn).toDateString().substr(4,13)
          }
        }
      } 
      else {
        this.message = resp.ErrorMessage;
        this.message = resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "My Shift List Status", 5000)
      }
    }
    ,   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"My Shift List Status")

    }
  );
  }

  ApproveTimeShift(Guid)
  {
    this.UpdateTimeShift={
      Id: Guid,
      Status: 3,
      ApprovedBy: JSON.parse(sessionStorage.getItem('user')).Id,
      StatusReason: "congratulation your request was approved"
    }

    console.log(this.UpdateTimeShift)


    this.shiftTimeService.UpdateTimeShiftData(this.UpdateTimeShift).subscribe(resp => {

      if(resp.Success)
      {
        this.message="Data is Updated successfully"
        this.getTheDataOfMyApproval(2)

        this.customToastrService.GetSuccessToastr(this.message, "Shift Update Status", 5000)
      }

      else
      {
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Shift Update Status", 5000)

      }

    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Shift Update Status")

}
)


  }


  RejectTimeShift(Guid)
  {
    this.UpdateTimeShift={
      Id: Guid,
      Status: 4,
      ApprovedBy: JSON.parse(sessionStorage.getItem('user')).Id,
      StatusReason: "your request was Rejected"
    }

    console.log(this.UpdateTimeShift)


    this.shiftTimeService.UpdateTimeShiftData(this.UpdateTimeShift).subscribe(resp => {

      if(resp.Success)
      {
        this.message="Data is Updated successfully"
        this.getTheDataOfMyApproval(2)


        this.customToastrService.GetSuccessToastr(this.message, "Shift Update Status", 5000)
      }

      else
      {
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Shift Update Status", 5000)

      }

    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Shift Update Status")

}
)


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
        this.MyShiftList=this.MyShiftList.sort((a,b)=>a.StartTime.localeCompare(b.StartTime)); // For ascending sort
      }
      else
      {
        this.sortIcon1="fa fa-sort-asc"
        this.MyShiftList=this.MyShiftList.sort((a,b)=>b.StartTime.localeCompare(a.StartTime)); // For ascending sort
      }
    }

    else if(value == 2)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon2="fa fa-sort-desc"
        this.MyShiftList=this.MyShiftList.sort((a,b)=>a.EndTime.localeCompare(b.EndTime)); // For ascending sort
      }
      else
      {
        this.sortIcon2="fa fa-sort-asc"
        this.MyShiftList=this.MyShiftList.sort((a,b)=>b.EndTime.localeCompare(a.EndTime)); // For ascending sort
      }
    }

    else if(value == 3)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon3="fa fa-sort-desc"
        this.MyShiftList=this.MyShiftList.sort((a,b)=>a.CreatedOn.localeCompare(b.CreatedOn)); // For ascending sort
      }
      else
      {
        this.sortIcon3="fa fa-sort-asc"
        this.MyShiftList=this.MyShiftList.sort((a,b)=>b.CreatedOn.localeCompare(a.CreatedOn)); // For ascending sort
      }
    }

    else if(value == 4)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon4="fa fa-sort-desc"
        this.MyShiftList=this.MyShiftList.sort((a,b)=>a.AprovingStatus.localeCompare(b.AprovingStatus)); // For ascending sort
      }
      else
      {
        this.sortIcon4="fa fa-sort-asc"
        this.MyShiftList=this.MyShiftList.sort((a,b)=>b.AprovingStatus.localeCompare(a.AprovingStatus)); // For ascending sort
      }
    }

    else if(value == 5)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon5="fa fa-sort-desc"
        this.MyShiftList=this.MyShiftList.sort((a,b)=>a.ApprovalPerson.localeCompare(b.ApprovalPerson)); // For ascending sort
      }
      else
      {
        this.sortIcon5="fa fa-sort-asc"
        this.MyShiftList=this.MyShiftList.sort((a,b)=>b.ApprovalPerson.localeCompare(a.ApprovalPerson)); // For ascending sort
      }
    }

    else if(value == 6)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon6="fa fa-sort-desc"
        this.MyShiftList=this.MyShiftList.sort((a,b)=>a.ApprovedBy.localeCompare(b.ApprovedBy)); // For ascending sort
      }
      else
      {
        this.sortIcon6="fa fa-sort-asc"
        this.MyShiftList=this.MyShiftList.sort((a,b)=>b.ApprovedBy.localeCompare(a.ApprovedBy)); // For ascending sort
      }
    }
  }


  disable()
  {
    this.sortIcon1="fa fa-sort"
    this.sortIcon2="fa fa-sort"
    this.sortIcon3="fa fa-sort"
    this.sortIcon4="fa fa-sort"
    this.sortIcon5="fa fa-sort"
    this.sortIcon6="fa fa-sort"

  }



  RejectPopup(Id)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="40%";
    // dialogConfig.height="40%";
    dialogConfig.data={Id}
    this.dialog.open(RejectPopupComponent, dialogConfig).afterClosed().subscribe(res =>{

      this.getTheDataOfMyApproval(2)

    });
  }





}
