import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { LoginService } from 'src/app/login/services/login.service';
import { AttendanceService } from '../../service/attendance.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { AppResponse } from 'src/app/models/appResponse';


@Component({
  selector: 'app-my-attendance',
  templateUrl: './my-attendance.component.html',
  styleUrls: ['./my-attendance.component.css']
})
export class MyAttendanceComponent implements OnInit {
  SearchAttendance: any[] = [];

  Attendance: any[]=[];
  message;

  ascNumberSort = true;

  sortIcon1="fa fa-sort"
  sortIcon2="fa fa-sort"
  sortIcon3="fa fa-sort"
  sortIcon4="fa fa-sort"
  sortIcon5="fa fa-sort"
  sortIcon6="fa fa-sort"
  sortIcon7="fa fa-sort"


  constructor(

    private attendanceService: AttendanceService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService

   ) {

  }


  GetAttendance(data)
  {
    console.log(data)
    let id=JSON.parse(sessionStorage.getItem('user')).Id

    this.attendanceService.getAttendanceByEmployee(id,data.month,data.year).subscribe(resp =>{

      if(resp.Success)
      {
        this.Attendance = resp.Data
      }
      else
      {
          // this.dangerStatus=true;
          // this.successStatus=false;
          this.message=resp.ErrorMessage;
          this.message=resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "My Attendance Status", 5000)

      }

    },   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"My Attendance Status")

}
)


  }

  ngOnInit() {
  }
  onSubmit(attendance) {
    console.log(attendance) 
  }



  sortFilter(value)
  {
    this.disable();


    if(value == 2)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon2="fa fa-sort-desc"
        this.Attendance=this.Attendance.sort((a, b) => new Date(b.CREATE_TS).getTime() - new Date(a.CREATE_TS).getTime()); // For ascending sort
      } 
      else 
      {
        this.sortIcon2="fa fa-sort-asc"
        this.Attendance=this.Attendance.sort((a, b) => new Date(b.CREATE_TS).getTime() - new Date(a.CREATE_TS).getTime()); // For descending sort
      }
    }

    else if(value == 3)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon3="fa fa-sort-desc"
        this.Attendance=this.Attendance.sort((a,b)=>a.SchemaName.localeCompare(b.SchemaName)); // For ascending sort
      } 
      else 
      {
        this.sortIcon3="fa fa-sort-asc"
        this.Attendance=this.Attendance.sort((a,b)=>b.SchemaName.localeCompare(a.SchemaName)); // For descending sort
      }
    }

    else if(value == 4)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon4="fa fa-sort-desc"
        this.Attendance=this.Attendance.sort((a,b)=>a.ObjectTypeCode - b.ObjectTypeCode); // For ascending sort
      } 
      else 
      {
        this.sortIcon4="fa fa-sort-asc"
        this.Attendance=this.Attendance.sort((a,b)=>b.ObjectTypeCode - a.ObjectTypeCode); // For descending sort
      }
    }

    else if(value == 5)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon5="fa fa-sort-desc"
        this.Attendance=this.Attendance.sort((a,b)=>a.Description.localeCompare(b.Description)); // For ascending sort
      } 
      else 
      {
        this.sortIcon5="fa fa-sort-asc"
        this.Attendance=this.Attendance.sort((a,b)=>b.Description.localeCompare(a.Description)); // For descending sort
      }
    }

    else if(value == 6)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon6="fa fa-sort-desc"
        this.Attendance=this.Attendance.sort((a,b)=>a.IsMasterAttendances.localeCompare(b.IsMasterAttendances)); // For ascending sort
      } 
      else 
      {
        this.sortIcon6="fa fa-sort-asc"
        this.Attendance=this.Attendance.sort((a,b)=>b.IsMasterAttendances.localeCompare(a.IsMasterAttendances)); // For descending sort
      }
    }

    else if(value == 7)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon7="fa fa-sort-desc"
        this.Attendance=this.Attendance.sort((a,b)=>a.PrimaryAttribute.localeCompare(b.PrimaryAttribute)); // For ascending sort
      } 
      else 
      {
        this.sortIcon7="fa fa-sort-asc"
        this.Attendance=this.Attendance.sort((a,b)=>b.PrimaryAttribute.localeCompare(a.PrimaryAttribute)); // For descending sort
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
    this.sortIcon7="fa fa-sort"
  }






}

