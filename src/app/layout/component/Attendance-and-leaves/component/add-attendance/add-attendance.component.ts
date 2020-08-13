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
  

      this.attendanceService.getUser().subscribe(resp => {

        if(resp.Success)
        {
          this.recordData = resp.Data
         
          for (let i=0; i<this.recordData.length; i++)
          {
            let date={
              EmployeeId: this.recordData[i].Id,
              Name: this.recordData[i].FullName,
              InTime: "00:00",
              OutTime: "00:00",
              CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,
              Status: 1,
              Action: 1
            }
            this.Addattendance.push(date)
          }
  
          console.log(this.Addattendance)

          var b2 = [
            {EmployeeId: "0",Name: "a",InTime: "08:25",OutTime: "19:25",CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,Status: 1,Action: 2},
            {EmployeeId: "1",Name: "b",InTime: "09:25",OutTime: "20:25",CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,Status: 2,Action: 2},
            {EmployeeId: "5",Name: "f",InTime: "10:25",OutTime: "21:25",CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,Status: 3,Action: 2},
          ];

          for(let i=0;i<b2.length;i++)
          {
            this.Addattendance.push(b2[i]);
          }
  
        }
        else
        {
            this.message=resp.ErrorMessage;
            this.message=resp.Message;
            this.customToastrService.GetErrorToastr(this.message,"Add Attendance", 5000)
        }
  
      },   (error: AppResponse) => {
        this.errorHandlingService.errorStatus(error,"Add Attendance")
  
  }
  )

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
        this.AddAttendanceOfEmployee(this.GetAttendance)
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

  AddAttendanceOfEmployee(Attendance)
  {
    this.showStatus=true
    console.log(this.Addattendance)

  }


  Save()
  {
    console.log(this.Addattendance)

    var b1 = [
      {EmployeeId: "0",Name: "a",InTime: "00:00",OutTime: "00:00",CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,Status: 1,Action: 1},
      {EmployeeId: "1",Name: "b",InTime: "00:00",OutTime: "00:00",CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,Status: 1,Action: 1},
      {EmployeeId: "2",Name: "c",InTime: "00:00",OutTime: "00:00",CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,Status: 1,Action: 1},
      {EmployeeId: "3",Name: "d",InTime: "00:00",OutTime: "00:00",CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,Status: 1,Action: 1},
      {EmployeeId: "4",Name: "e",InTime: "00:00",OutTime: "00:00",CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,Status: 1,Action: 1},
      {EmployeeId: "5",Name: "f",InTime: "00:00",OutTime: "00:00",CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,Status: 1,Action: 1},
      
    ]; 
    
    var b2 = [
      {EmployeeId: "0",Name: "a",InTime: "08:25",OutTime: "19:25",CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,Status: 1,Action: 2},
      {EmployeeId: "1",Name: "b",InTime: "09:25",OutTime: "20:25",CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,Status: 2,Action: 2},
      {EmployeeId: "5",Name: "f",InTime: "10:25",OutTime: "21:25",CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,Status: 3,Action: 2},
      
    ];

    var res = b1.filter(item1 => 
      !b2.some(item2 => (item2.EmployeeId === item1.EmployeeId)))
      console.log(res);

      for(let i=0;i<res.length;i++)
      {
        b2.push(res[i]);
      }

      this.Addattendance = b2;
      this.showStatus=true
      console.log(this.Addattendance);

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
