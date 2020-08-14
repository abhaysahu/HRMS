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
  Addattendance: any[] = [];
  recordData: any[]=[];
  DateOfAttendance;
  dropdownList: any[]=[];
  FormData: any[]=[];

  GetAttendance: any[]=[];

  email="";
  message;
  showStatus=false;


  constructor(
    private attendanceService: AttendanceService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService

    ) {

      this.FormData=[{
        EmployeeId:"",
        Date:"",
        InTime: "",
        OutTime: "",
        CreatedBy: "",
        Status: ""


      }]

      this.attendanceService.AttendanceStatus().subscribe(resp => {
        console.log(resp);
       
        if (resp.Success) {
          this.dropdownList = resp.Data;
          console.log(this.dropdownList)
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

  getUserForAttendanceByDate(date)
  {
    this.DateOfAttendance = date;

    this.attendanceService.getAttendanceByDate(date).subscribe(resp => {
      console.log(resp)
     
      if (resp.Success) {
        this.GetAttendance = resp.Data;
        this.Addattendance = resp.Data
       
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


  Statuschange(status)
  {
    this.FormData[0].Status = status
  }

  InTimechange(inTime)
  {
    this.FormData[0].InTime = inTime
  }

  OutTimechange(outTime)
  {
    this.FormData[0].OutTime = outTime
  }


  SaveAttendance(employeeId)
  {

    this.FormData[0].EmployeeId=employeeId;
    this.FormData[0].CreatedBy=JSON.parse(sessionStorage.getItem('user')).Id;
    this.FormData[0].Date=this.DateOfAttendance;
   
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
          Status: ""
        }]
        this.getUserForAttendanceByDate(this.DateOfAttendance)
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
