import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { LoginService } from 'src/app/login/services/login.service';


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
  persons: Person[];

  constructor(private http: HttpClient, private loginService: LoginService) {}

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      serverSide: true,
      processing: true,
      searching: true,
      search: false,
      info:true,

      // paging: false,
      // dom: '<"bottom"i>rt<"bottom"flp><"clear">',
      
      ajax: (dataTablesParameters: any, callback) => {
        this.loginService.getDate(dataTablesParameters)
        .subscribe(resp => {

          console.log(resp)

            that.persons = resp.data;

            console.log(this.persons)

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' },{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' },{ data: 'id' }, { data: 'firstName' }]
    };
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
