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

  GetAttendance: any[]=[];

  email="";
  message;
  showStatus=false



  constructor(
    private attendanceService: AttendanceService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService

    ) {

      this.attendanceService.AttendanceStatus().subscribe(resp => {
        console.log(resp);
       
        if (resp.Success) {
          this.dropdownList = resp.Data;
          console.log(this.dropdownList)
        } else {
          
          this.message = resp.ErrorMessage;
          this.message = resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Shift Save Status", 5000)
  
        }
        
      }
      ,   (error: AppResponse) => {
  
        this.errorHandlingService.errorStatus(error,"Shift Save Status")
  
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
              InTime: null,
              OutTime: null,
              CreatedBy: JSON.parse(sessionStorage.getItem('user')).Id,
              Status: 1,
              Action: 1
            }
            this.Addattendance.push(date)
          }
  
          console.log(this.Addattendance)
  
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
        this.customToastrService.GetErrorToastr(this.message, "Shift Save Status", 5000)
  
      }
      
    }
    ,   (error: AppResponse) => {
  
      this.errorHandlingService.errorStatus(error,"Shift Save Status")
  
    }
  );


  }

  AddAttendanceOfEmployee(Attendance)
  {
    this.showStatus=true
    console.log(this.Addattendance)

  }


  // Save()
  // {
  //   console.log(this.Addattendance)

  // }


  SaveAttendance(saveattendanceData)
  {
    console.log(this.Addattendance)
  
    saveattendanceData.Date=this.DateOfAttendance;
    saveattendanceData.CreatedBy=JSON.parse(sessionStorage.getItem('user')).Id;
    console.log(saveattendanceData)

    this.attendanceService.attendanceDataSave(saveattendanceData).subscribe(resp => {
     
      if(resp.Success)
      {
        this.message="Data is Added successfully"
        this.getUserForAttendanceByDate(this.DateOfAttendance)


        this.customToastrService.GetSuccessToastr(this.message, "Attendance Save Status", 5000)
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

  // Statuschange(status, index)
  // {
  //   console.log(status)
  //   this.Addattendance[index].Status = status
  //   if(status == 3 || status == 4)
  //   {
  //     this.Addattendance[index].Intime = "00:00"
  //     this.Addattendance[index].OutTime = "00:00"
  //   }

  //   else if (status == 2)
  //   {
  //     this.Addattendance[index].Intime = "15:00"
  //     this.Addattendance[index].OutTime = "00:00"
  //   }
  //   else if (status == 1)
  //   {
  //     this.Addattendance[index].Intime = "10:00"
  //     this.Addattendance[index].OutTime = "20:00"
  //   }

  // }

  // InTimechange(inTime, index)
  // {
  //   console.log(inTime)
  //   console.log(index)
  //   this.Addattendance[index].Intime = inTime
  // }

  // OutTimechange(outTime, index)
  // {
  //   console.log(outTime)
  //   console.log(index)
  //   this.Addattendance[index].OutTime = outTime
  // }


}
