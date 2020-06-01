import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { AppResponse } from 'src/app/models/appResponse';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CommentsComponent } from '../../../Timesheet/component/comments/comments.component';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  Employee: any[]=[];

  dropdownListOfUser: any[]=[];
  dropdownListOfDepartment: any[]=[];
  dropdownListOfDesignation: any[]=[];
  dropdownListOfMaritalStatus: any[]=[];
  dropdownListOfGender: any[]=[];
  dropdownListOfStatus: any[]=[];
  

  dangerStatus=false;
  successStatus=false;
  message="";


  constructor(private router: Router, private employeeService: EmployeeService,private dialog: MatDialog,) {




    this.employeeService.employeeStatus().subscribe(resp =>{
      console.log(resp)
     
      if(resp.Success)
      {
        this.dropdownListOfStatus = resp.Data
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.ErrorMessage;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      if(error.status === 400)
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = error.message
       
      }
      else if(error.status === 401)
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = "Authorization has been denied for this request And You have to Login again."
        setTimeout(()=>
            {    
              this.router.navigate(['/login']);
            }, 3000);
      }       
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = error.message;
      }
    }
  )
  



    this.employeeService.getUser().subscribe(resp =>{
      console.log(resp)
     
      if(resp.Success)
      {
        this.dropdownListOfUser = resp.Data
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.ErrorMessage;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      if(error.status === 400)
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = error.message
       
      }
      else if(error.status === 401)
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = "Authorization has been denied for this request And You have to Login again."
        setTimeout(()=>
            {    
              this.router.navigate(['/login']);
            }, 3000);
      }       
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = error.message;
      }
    }
  )
  
  


    
  this.employeeService.listOfDepartment().subscribe(resp =>{
    console.log(resp)
   
    if(resp.Success)
    {
      this.dropdownListOfDepartment = resp.Data
    }
    else
    {
      this.dangerStatus=true;
      this.successStatus=false;
      this.message=resp.ErrorMessage;
      this.message=resp.Message;
    }
    
  }
  ,   (error: AppResponse) => {
    if(error.status === 400)
    {
      this.dangerStatus=true;
      this.successStatus=false;
      this.message = error.message
     
    }
    else if(error.status === 401)
    {
      this.dangerStatus=true;
      this.successStatus=false;
      this.message = "Authorization has been denied for this request And You have to Login again."
      setTimeout(()=>
          {    
            this.router.navigate(['/login']);
          }, 3000);
    }       
    else
    {
      this.dangerStatus=true;
      this.successStatus=false;
      this.message = error.message;
    }
  }
)



this.employeeService.listOfDesignation().subscribe(resp =>{
  console.log(resp)
   
  if(resp.Success)
  {
    this.dropdownListOfDesignation = resp.Data
  }
  else
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message=resp.ErrorMessage;
    this.message=resp.Message;
  }
  
}
,   (error: AppResponse) => {
  if(error.status === 400)
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message = error.message
   
  }
  else if(error.status === 401)
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message = "Authorization has been denied for this request And You have to Login again."
    setTimeout(()=>
          {    
            this.router.navigate(['/login']);
          }, 3000);
  }       
  else
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message = error.message;
  }
}
)

this.employeeService.listOfMaritalStatus().subscribe(resp =>{
  console.log(resp)
   
  if(resp.Success)
  {
    this.dropdownListOfMaritalStatus = resp.Data
  }
  else
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message=resp.ErrorMessage;
    this.message=resp.Message;
  }
  
}
,   (error: AppResponse) => {
  if(error.status === 400)
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message = error.message
   
  }
  else if(error.status === 401)
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message = "Authorization has been denied for this request And You have to Login again."
    setTimeout(()=>
          {    
            this.router.navigate(['/login']);
          }, 3000);
  }       
  else
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message = error.message;
  }
}
)


this.employeeService.listOfGender().subscribe(resp =>{
  console.log(resp)
   
  if(resp.Success)
  {
    this.dropdownListOfGender = resp.Data
  }
  else
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message=resp.ErrorMessage;
    this.message=resp.Message;
  }
  
}
,   (error: AppResponse) => {
  if(error.status === 400)
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message = error.message
   
  }
  else if(error.status === 401)
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message = "Authorization has been denied for this request And You have to Login again."
    setTimeout(()=>
          {    
            this.router.navigate(['/login']);
          }, 3000);
  }       
  else
  {
    this.dangerStatus=true;
    this.successStatus=false;
    this.message = error.message;
  }
}
)

}


  ngOnInit() {
  }


  Basic(employee) {
    console.log(employee)
    let id=3
    employee.CreatedBy = JSON.parse(sessionStorage.getItem('user')).Id
    this.employeeService.UserDataSave(employee).subscribe(resp =>{
      // console.log(resp)
      if(resp.Success)
      {
        this.successStatus=true;
        this.dangerStatus=false;
        this.message="Data is Added successfully"
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      if(error.status === 400)
      {
       this.message = error.message
       this.dangerStatus=true;
        this.successStatus=false;
       console.log(this.message)
      }
      else if(error.status === 401)
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = "Authorization has been denied for this request And You have to Login again."
      }       
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message = error.message;
      }
    }
  )
  }


  printPage()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={}
    this.dialog.open(CommentsComponent, dialogConfig).afterClosed().subscribe(res =>{
    });
  }


  closeStatus()
  {
    this.dangerStatus=false;
    this.successStatus=false;
  }


}
