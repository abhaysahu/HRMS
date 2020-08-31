import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../service/attendance.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { AppResponse } from 'src/app/models/appResponse';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';
import { AuthService } from 'src/app/service/auth.service';
import { Role } from 'src/app/models/role';



@Component({
  selector: 'app-my-attendance',
  templateUrl: './my-attendance.component.html',
  styleUrls: ['./my-attendance.component.css']
})
export class MyAttendanceComponent implements OnInit {
  SearchAttendance: any;

  dateOfJoining: any=[];

  Attendance: any[]=[];
  AwaitingAttendance: any[]=[];
  // ListOfMonth: any[]=[];
  dropDownListOfMonth: any[]=[];
  dropDownListOfYear: any[]=[];
  month:any[]=[]

  message;
  showTable=false
  
  data={}
  
  Name
  length=1;

  roles;
  Admin= false;
  HR=false;

  Id;
  ascNumberSort = true;

  sortIcon1="fa fa-sort"
  sortIcon2="fa fa-sort"
  sortIcon3="fa fa-sort"
  sortIcon4="fa fa-sort"
  sortIcon5="fa fa-sort"
  sortIcon6="fa fa-sort"
  sortIcon7="fa fa-sort"
  sortIcon8="fa fa-sort"



  constructor(
    private dialog: MatDialog,
    private attendanceService: AttendanceService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService,
    private route: ActivatedRoute,
    private authService: AuthService
   ) {

    this.Admin= false;
    this.HR=false;
    

    this.roles = authService.getRole()

    if(Role.Admin == authService.getRole())
    {
      this.Admin=true
    }
    if(Role.HR == authService.getRole())
    {
      this.HR=true
    }


    if(this.route.snapshot.paramMap.get('id'))
    {
      this.Id=this.route.snapshot.paramMap.get('id')
      this.Name=this.route.snapshot.paramMap.get('name')
      console.log(this.Name)
    }
    else
    {
      this.Name="My"
      this.Id=JSON.parse(sessionStorage.getItem('user')).Id;
    }


    let date=new Date();

    this.SearchAttendance={
      year:date.getFullYear(),
      month:(date.getMonth()+1)
    }
    //console.log(this.SearchAttendance)
    this.GetAttendance(this.SearchAttendance)

    this.month=[
      {
        Value:1,
        Text:"Jan"
      },
      {
        Value:2,
        Text:"Feb"
      },
      {
        Value:3,
        Text:"Mar"
      },
      {
        Value:4,
        Text:"Apr"
      },
      {
        Value:5,
        Text:"May"
      },
      {
        Value:6,
        Text:"Jun"
      },
      {
        Value:7,
        Text:"Jul"
      },
      {
        Value:8,
        Text:"Aug"
      },
      {
        Value:9,
        Text:"Sep"
      },
      {
        Value:10,
        Text:"Oct"
      },
      {
        Value:11,
        Text:"Nov"
      },
      {
        Value:12,
        Text:"Dec"
      },
    ]


    this.attendanceService.getDateOfJoining(this.Id).subscribe(resp =>{

      if(resp.Success)
      {
        this.dateOfJoining=resp.Data
        console.log(this.dateOfJoining.DateOfJoining)

        let doj=new Date(this.dateOfJoining.DateOfJoining);

        let Tod=new Date();

        let yearOfDOJ=doj.getFullYear()
        let yearOfTOD=Tod.getFullYear();
        let diff =Tod.getFullYear()-doj.getFullYear();
        // console.log(diff)

        for (let i=0;i<(diff+1);i++)
        {
          this.data={
            Value:yearOfDOJ+i,
            Text:yearOfDOJ+i,
        }

        this.dropDownListOfYear.push(this.data)
      }
      this.getListOfMonth(yearOfTOD)
      // console.log(this.dropDownListOfYear)

      }
      else
      {
          this.message=resp.ErrorMessage;
          this.message=resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "My Attendance Status", 5000)

      }

    },   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"My Attendance Status")

}
)

  }

  GetAttendance(data)
  {

    this.length=1
    //console.log(data)

    this.attendanceService.getAttendanceByEmployee(this.Id,data.month,data.year).subscribe(resp =>{

      if(resp.Success)
      {
        this.Attendance = resp.Data
        if(this.Attendance!=null)
        {
          console.log(this.Attendance)
          for(let i=0;i<this.Attendance.length;i++)
          {
            this.Attendance[i].Date=new Date(this.Attendance[i].Date).toDateString().substr(0,13)

            if(this.Attendance[i].OutTime=="00:00:00")
            {
              this.Attendance[i].WorkingHours="0.00"
            }
            else
            {
              let intime = this.Attendance[i].InTime
              let outtime = this.Attendance[i].OutTime
              var dt1 = new Date("October 13, 2014 "+intime);
              var dt2 = new Date("October 13, 2014 "+outtime);
              var diff =(dt2.getTime() - dt1.getTime()) / 1000;
              diff = diff/60;
              let ans = Math.abs(Math.round(diff)/60).toFixed(2);
              this.Attendance[i].WorkingHours=ans
            }


            if(this.Attendance[i].Shift.Id=="00000000-0000-0000-0000-000000000000")
            {
              this.Attendance[i].ShiftTimeing = "00:00 - 00:00"
            }
            else
            {
              this.Attendance[i].ShiftTimeing = `${(this.Attendance[i].Shift.StartTime).substr(0,5)} - ${(this.Attendance[i].Shift.EndTime).substr(0,5)}`
            }

            this.Attendance[i].InTime = (this.Attendance[i].InTime).substr(0,5);
            this.Attendance[i].OutTime = (this.Attendance[i].OutTime).substr(0,5);
          }


          this.Attendance=this.Attendance.sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime()); // For ascending sort

          this.showTable=true

          console.log(this.Attendance)
        }
        else
        {
          this.length=0;
          this.customToastrService.GetInfoToastr("No Attendance Found!!..", "No Data", 5000);
        }
      }
      else
      {
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
  // onSubmit(attendance) {
  //   console.log(attendance)
  // }


  DataOfAwaitingMyApproval()
  {

    this.length=1
    //console.log(data)

    this.attendanceService.getAttendanceOfAwaitingMyApproval(this.Id,"08","2020").subscribe(resp =>{

      if(resp.Success)
      {
        this.AwaitingAttendance = resp.Data
        if(this.AwaitingAttendance!=null)
        {
          this.AwaitingAttendance=this.AwaitingAttendance.sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime()); // For ascending sort

          this.showTable=true

          console.log(this.AwaitingAttendance)
        }
        else
        {
          this.length=0;
          this.customToastrService.GetInfoToastr("No Awaiting Attendance Found!!..", "No Data", 5000);
        }
      }
      else
      {
          this.message=resp.ErrorMessage;
          this.message=resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "My Awaiting Attendance Status", 5000)

      }

    },   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"My Awaiting Attendance Status")

}
)


  }





  getListOfMonth(Year)
  {

    this.dropDownListOfMonth=[]

    let year=Year
    // console.log(year)
    this.dateOfJoining.DateOfJoining

    let doj=new Date(this.dateOfJoining.DateOfJoining);

    let Tod=new Date();

    let yearOfDOJ=doj.getFullYear()
    let yearOfTOD=Tod.getFullYear();

    // console.log(yearOfDOJ)
    // console.log(yearOfTOD)

    if(year==yearOfDOJ && year!=yearOfTOD)
    {
      // console.log((doj.getMonth()+1).toString())

      for(let i=doj.getMonth();i<12;i++)
      {
        this.data={
              Value:this.month[i].Value,
              Text:this.month[i].Text,
            }

            this.dropDownListOfMonth.push(this.data)
      }

      console.log(this.dropDownListOfMonth)
    }


    else if(year>yearOfDOJ && year!=yearOfTOD)
    {
      this.dropDownListOfMonth=this.month
      console.log(this.dropDownListOfMonth)
    }

    else if(year==yearOfTOD)
    {

      for(let i=0;i<Tod.getMonth()+1;i++)
      {
        this.data={
              Value:this.month[i].Value,
              Text:this.month[i].Text,
            }
            this.dropDownListOfMonth.push(this.data)
      }
      // console.log(this.dropDownListOfMonth)
    }


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
        this.Attendance=this.Attendance.sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime()); // For ascending sort
      }
      else
      {
        this.sortIcon2="fa fa-sort-asc"
        this.Attendance=this.Attendance.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()); // For descending sort
      }
    }

    else if(value == 3)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon3="fa fa-sort-desc"
        this.Attendance=this.Attendance.sort((a,b)=>a.ShiftTimeing.localeCompare(b.ShiftTimeing)); // For ascending sort
      }
      else
      {
        this.sortIcon3="fa fa-sort-asc"
        this.Attendance=this.Attendance.sort((a,b)=>b.ShiftTimeing.localeCompare(a.ShiftTimeing)); // For descending sort
      }
    }

    else if(value == 4)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon4="fa fa-sort-desc"
        this.Attendance=this.Attendance.sort((a,b)=>a.InTime.localeCompare(b.InTime)); // For ascending sort
      }
      else
      {
        this.sortIcon4="fa fa-sort-asc"
        this.Attendance=this.Attendance.sort((a,b)=>b.InTime.localeCompare(a.InTime)); // For descending sort
      }
    }

    else if(value == 5)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon5="fa fa-sort-desc"
        this.Attendance=this.Attendance.sort((a,b)=>a.OutTime.localeCompare(b.OutTime)); // For ascending sort
      }
      else
      {
        this.sortIcon5="fa fa-sort-asc"
        this.Attendance=this.Attendance.sort((a,b)=>b.OutTime.localeCompare(a.OutTime)); // For descending sort
      }
    }

    else if(value == 6)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon6="fa fa-sort-desc"
        this.Attendance=this.Attendance.sort((a,b)=>a.WorkingHours.localeCompare(b.WorkingHours)); // For ascending sort
      }
      else
      {
        this.sortIcon6="fa fa-sort-asc"
        this.Attendance=this.Attendance.sort((a,b)=>b.WorkingHours.localeCompare(a.WorkingHours)); // For ascending sort
      }
    }

    else if(value == 7)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon7="fa fa-sort-desc"
        this.Attendance=this.Attendance.sort((a,b)=>a.Status.Text.localeCompare(b.Status.Text)); // For ascending sort
      }
      else
      {
        this.sortIcon7="fa fa-sort-asc"
        this.Attendance=this.Attendance.sort((a,b)=>b.Status.Text.localeCompare(a.Status.Text)); // For descending sort
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
    this.sortIcon8="fa fa-sort"

  }
  EditPopup()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={}
    this.dialog.open(EditPopupComponent, dialogConfig).afterClosed().subscribe(res =>{

    });
  }






}

