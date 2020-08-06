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
  recordData: any[]=[]

  email="";
  message;



  constructor(
    private attendanceService: AttendanceService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService

    ) {

    this.attendanceService.getUser().subscribe(resp => {

        if(resp.Success)
        {
          this.recordData = resp.Data
          console.log(this.recordData)
          for (let i=0; i<this.recordData.length; i++)
          {
            let date={
              id: this.recordData[i].Id,
              Name: this.recordData[i].FullName,
              Intime: "10:00",
              OutTime: "20:00",
              Status: 1
            }
            this.Addattendance.push(date)
          }

          console.log(this.Addattendance)

        }
        else
        {
            // this.dangerStatus=true;
            // this.successStatus=false;
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


  Save()
  {
    console.log(this.Addattendance)

  }

  Statuschange(status, index)
  {
    console.log(status)
    this.Addattendance[index].Status = status
    if(status == 3 || status == 4)
    {
      this.Addattendance[index].Intime = "00:00"
      this.Addattendance[index].OutTime = "00:00"
    }

    else if (status == 2)
    {
      this.Addattendance[index].Intime = "15:00"
      this.Addattendance[index].OutTime = "00:00"
    }
    else if (status == 1)
    {
      this.Addattendance[index].Intime = "10:00"
      this.Addattendance[index].OutTime = "20:00"
    }

  }

  InTimechange(inTime, index)
  {
    console.log(inTime)
    console.log(index)
    this.Addattendance[index].Intime = inTime
  }

  OutTimechange(outTime, index)
  {
    console.log(outTime)
    console.log(index)
    this.Addattendance[index].OutTime = outTime
  }


}
