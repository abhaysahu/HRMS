import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { LoginService } from 'src/app/login/services/login.service';
import { EmployeeService } from '../../services/employee.service';


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

  @ViewChild(DataTableDirective)
  
  datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  persons: any[]=[]

  constructor(private http: HttpClient, private loginService: LoginService, private employeeService: EmployeeService
    ) {

      this.employeeService.getUser()
        .subscribe(resp => {

          console.log(resp)

            this.persons = resp.Data;

            console.log(this.persons)

          });

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

}
