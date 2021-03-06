import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../service/attendance.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { AppResponse } from 'src/app/models/appResponse';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit {
  persons: any[]=[];

  Addattendance: any[] = [];

  respnseOfAttendace:any=[];


  DateOfAttendance;
  dropdownList: any[]=[];
  FormData: any[]=[];
  ProductForm: any;

  colors:any[]=[];
  showTime;

  email="";
  message;
  showStatus=false;


  constructor(
    private attendanceService: AttendanceService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService

    ) {

      let str = "full day #569824";
      let splits = str.split("#")
      console.log("#"+splits[1])

      this.FormData=[{
        EmployeeId:"",
        Date:"",
        InTime: "",
        OutTime: "",
        CreatedBy: "",
        Status: 1
      }]
    
      // let d = new Date();
      let d = new Date();
      let calculatedDate =new Date(d.setDate(d.getDate()));

      let date12 =(`${calculatedDate.getMonth()+1}-${calculatedDate.getDate()}-${calculatedDate.getFullYear()}`);

      // console.log(date12)

      this.ProductForm = {
        Date: date12,
      }

      // console.log(this.ProductForm)

      this.attendanceService.AttendanceColourCode().subscribe(resp => {

        // console.log(resp);

        if (resp.Success) {
          this.colors = resp.Data;
          for(let i=0;i<this.colors.length;i++)
          {
            let str = this.colors[i].Text
            let splits = str.split("#")
            this.colors[i].Text= "#"+splits[1]
          }
          console.log(this.colors)
          // this.getUserForAttendanceByDate(this.ProductForm.Date)
        } else {

          this.message = resp.ErrorMessage;
          this.message = resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Attendance Status", 5000)

        }

      }
      ,   (error: AppResponse) => {

        this.errorHandlingService.errorStatus(error,"Attendance Status")

      }
    )


      this.attendanceService.AttendanceStatus().subscribe(resp => {
        console.log(resp);

        if (resp.Success) {
          this.dropdownList = resp.Data;
          console.log(this.dropdownList)
          this.getUserForAttendanceByDate(this.ProductForm.Date)
        } else {

          this.message = resp.ErrorMessage;
          this.message = resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Attendance Status", 5000)

        }

      }
      ,   (error: AppResponse) => {

        this.errorHandlingService.errorStatus(error,"Attendance Status")

      }
    );
}
 ngOnInit() {
  }

  getTheColor(status) {

    return this.colors.filter(item => item.Value == status)[0]

  }

  getUserForAttendanceByDate(date)
  {
    this.DateOfAttendance = date;
    console.log(this.DateOfAttendance)

    this.attendanceService.getAttendanceByDate(date).subscribe(resp => {
      console.log(resp)

      if (resp.Success) {
        this.Addattendance = resp.Data;

        for(let i=0;i<resp.Data.length;i++)
        {
          if(this.Addattendance[i].Status!=null)
          {
            this.Addattendance[i].Status=this.Addattendance[i].Status.Value
          }
          else
          {
            this.Addattendance[i].Status=7
          }

          if((this.Addattendance[i].OutTime)=="00:00:00" && (this.Addattendance[i].Status==1 || this.Addattendance[i].Status==2))
          {
            this.Addattendance[i].OutTime=null
          }
          else
          {
            this.Addattendance[i].OutTime=this.Addattendance[i].OutTime
          }

        }

        console.log(this.Addattendance)
        

        this.Addattendance=this.Addattendance.sort((a,b)=>a.Employee.Name.localeCompare(b.Employee.Name)); // For ascending sort

        this.showStatus=true;


      } else {

        this.message = resp.ErrorMessage;
        this.message = resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Attendance Status", 5000)
      }
    }
    ,   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"Attendance Status")

    }
  );


  }


  Statuschange(status,i)
  {

    console.log(status)
    this.Addattendance[i].Status=status

    this.FormData[0].Status = status
    if(status==3 || status==4 || status==5 || status==6)
    {
      this.Addattendance[i].InTime="00:00";
      this.Addattendance[i].OutTime="00:00";
    }
    else
    {
      console.log(status)
      this.Addattendance[i].InTime=null;
      this.Addattendance[i].OutTime=null;
    }


  }

  InTimechange(inTime,i)
  {
    this.Addattendance[i].InTime=inTime
    this.FormData[0].InTime = inTime
  }

  OutTimechange(outTime,i)
  {
    this.Addattendance[i].OutTime=outTime
    this.FormData[0].OutTime = outTime
  }


  SaveAttendance(employeeId,i)
  {
    let c=0;

    this.FormData[0].EmployeeId=employeeId;
    this.FormData[0].CreatedBy=JSON.parse(sessionStorage.getItem('user')).Id;
    this.FormData[0].Date=this.DateOfAttendance;
    this.FormData[0].Status=this.Addattendance[i].Status
    this.FormData[0].InTime=this.Addattendance[i].InTime
    if(this.Addattendance[i].OutTime==null || this.Addattendance[i].OutTime=="")
    {
      this.FormData[0].OutTime="00:00"
    }
    else
    {
      this.FormData[0].OutTime=this.Addattendance[i].OutTime
    }

    console.log(this.FormData)


    this.attendanceService.attendanceDataSave(this.FormData[0]).subscribe(resp => {

      if(resp.Success)
      {
        this.message="Data is Added successfully"

        this.customToastrService.GetSuccessToastr(this.message, "Attendance Save Status", 5000)

        this.FormData=[{
          EmployeeId:"",
          Date:"",
          InTime: "",
          OutTime: "",
          CreatedBy: "",
          Status: 1
        }]
        this.Addattendance[i].Id = resp.Id
        // this.getUserForAttendanceByDate(this.DateOfAttendance)
      }
      else
      {
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Attendance Save Status", 5000)
      }
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Attendance Save Status")
}
)

  }


  UpdateAttendance(id,i)
  {

    this.FormData[0].Id=id;
    this.FormData[0].ModifiedBy=JSON.parse(sessionStorage.getItem('user')).Id;
    // this.FormData[0].Date=this.DateOfAttendance;
    this.FormData[0].Status=this.Addattendance[i].Status
    this.FormData[0].InTime=this.Addattendance[i].InTime
    if(this.Addattendance[i].OutTime==null || this.Addattendance[i].OutTime=="")
    {
      this.FormData[0].OutTime="00:00"
    }
    else
    {
      this.FormData[0].OutTime=this.Addattendance[i].OutTime
    }

    console.log(this.FormData)

    this.attendanceService.attendanceDataUpdate(this.FormData[0]).subscribe(resp => {

      if(resp.Success)
      {
        this.message="Data is Updated successfully"
        console.log(resp)

        this.customToastrService.GetSuccessToastr(this.message, "Attendance Update Status", 5000)

        this.FormData=[{
          EmployeeId:"",
          Date:"",
          InTime: "",
          OutTime: "",
          CreatedBy: "",
          Status: 1
        }]
        // this.getUserForAttendanceByDate(this.DateOfAttendance)
      }
      else
      {
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Attendance Save Status", 5000)
      }
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Attendance Save Status")
}
)

  }

}
