import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { DataTableDirective } from 'angular-datatables';
import { LoginService } from 'src/app/login/services/login.service';
import { EmployeeService } from '../../services/employee.service';
import { AppResponse } from 'src/app/models/appResponse';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { AuthService } from 'src/app/service/auth.service';
import { Role } from 'src/app/models/role';




class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // @ViewChild(DataTableDirective)

  // datatableElement: DataTableDirective;

  // dtOptions: DataTables.Settings = {};

  roles;
  Admin= false;
  HR=false;

  persons: any[]=[];
  length=1

  ascNumberSort = true;

  sortIcon1="fa fa-sort"
  sortIcon2="fa fa-sort"
  sortIcon3="fa fa-sort"
  sortIcon4="fa fa-sort"
  sortIcon5="fa fa-sort"
  sortIcon6="fa fa-sort"
  sortIcon7="fa fa-sort"

  // successStatus=false;
  // dangerStatus=false;
  message="";
  email="";

  constructor(private http: HttpClient,

    private loginService: LoginService,
    private employeeService: EmployeeService,
    private errorHandlingService: ErrorHandlingService,
    private customToastrService: CustomToastrService,
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


      this.employeeService.getUser().subscribe(resp =>{
        console.log(resp)
        this.length=1
        if(resp.Success)
        {
          this.persons = resp.Data
          console.log(this.persons)
          if(this.persons==null)
          {
            this.length=0;
            this.customToastrService.GetInfoToastr("No Record Found!!..", "No Data", 5000);
          }
          else
          {
            for(let i=0;i<this.persons.length;i++)
            {
              if(this.persons[i].Designation==null)
              {
                this.persons[i].Designation="-------"
              }
              else
              {
                this.persons[i].Designation= this.persons[i].Designation.Text
              }

              if(this.persons[i].Department==null)
              {
                this.persons[i].Department="-------"
              }
              else
              {
                this.persons[i].Department= this.persons[i].Department.Text
              }

              if(this.persons[i].Status==null)
              {
                this.persons[i].Status="-------"
              }
              else
              {
                this.persons[i].Status= this.persons[i].Status.Text
              }

            }
          }

          this.persons=this.persons.sort((a,b)=>a.FullName.localeCompare(b.FullName));
        }
        else
        {
            this.message=resp.ErrorMessage;
            this.message=resp.Message;
            this.customToastrService.GetErrorToastr(this.message,"List Employee Status", 5000)
        }

      },   (error: AppResponse) => {
        this.errorHandlingService.errorStatus(error,"List Employee Status")

  }
  )


    }

  ngOnInit(): void {
    // const that = this;

    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   serverSide: true,

    //   searching: true,
    //   search: false,
    //   info:true,



    //   ajax: (dataTablesParameters: any) => {
    //     this.employeeService.getUser()
    //     .subscribe(resp => {

    //       console.log(resp)

    //         that.persons = resp.Data;

    //         console.log(this.persons)

    //       });
    //   },
    // };

  }

  // ngAfterViewInit(): void {
  //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.columns().every(function () {
  //       const that = this;
  //       $('input', this.footer()).on('keyup change', function () {

  //         if (that.search() !== this['value']) {
  //           that
  //             .search(this['value'])
  //             .draw();
  //         }
  //       });
  //     });
  //   });
  // }



  sortFilter(value)
  {
    this.disable();

    if(value == 1)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon1="fa fa-sort-desc"
        this.persons=this.persons.sort((a,b)=>a.EmpCode - b.EmpCode); // For ascending sort
      }
      else
      {
        this.sortIcon1="fa fa-sort-asc"
        this.persons=this.persons.sort((a,b)=>b.EmpCode - a.EmpCode); // For descending sort
      }
    }

    else if(value == 2)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon2="fa fa-sort-desc"
        this.persons=this.persons.sort((a,b)=>a.FullName.localeCompare(b.FullName)); // For ascending sort
      }
      else
      {
        this.sortIcon2="fa fa-sort-asc"
        this.persons=this.persons.sort((a,b)=>b.FullName.localeCompare(a.FullName)); // For descending sort
      }
    }

    else if(value == 3)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon3="fa fa-sort-desc"
        this.persons=this.persons.sort((a,b)=>a.Designation.localeCompare(b.Designation)); // For ascending sort
      }
      else
      {
        this.sortIcon3="fa fa-sort-asc"
        this.persons=this.persons.sort((a,b)=>b.Designation.localeCompare(a.Designation)); // For descending sort
      }
    }


    else if(value == 4)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon4="fa fa-sort-desc"
        this.persons=this.persons.sort((a,b)=>a.Department.localeCompare(b.Department)); // For ascending sort
      }
      else
      {
        this.sortIcon4="fa fa-sort-asc"
        this.persons=this.persons.sort((a,b)=>b.Department.localeCompare(a.Department)); // For descending sort
      }
    }

    else if(value == 5)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon5="fa fa-sort-desc"
        this.persons=this.persons.sort((a,b)=>a.PersonalEmail.localeCompare(b.PersonalEmail)); // For ascending sort
      }
      else
      {
        this.sortIcon5="fa fa-sort-asc"
        this.persons=this.persons.sort((a,b)=>b.PersonalEmail.localeCompare(a.PersonalEmail)); // For descending sort
      }
    }

    else if(value == 6)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon6="fa fa-sort-desc"
        this.persons=this.persons.sort((a,b)=>a.Status.localeCompare(b.Status)); // For ascending sort
      }
      else
      {
        this.sortIcon6="fa fa-sort-asc"
        this.persons=this.persons.sort((a,b)=>b.Status.localeCompare(a.Status)); // For descending sort
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
