import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../service/attendance.service';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit {
  Addattendance: any[] = [];



  constructor(private attendanceService: AttendanceService) { 

    this.attendanceService.get().subscribe(resp => {
      console.log(resp.data)
      this.Addattendance = resp.data
    })
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
      this.Addattendance[index].Intime = "02:00"
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
