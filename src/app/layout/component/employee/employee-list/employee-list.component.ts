import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { LoginService } from 'src/app/login/services/login.service';
import { Observable } from 'rxjs';


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

  persons: Person[]=[];
  filters: Person[]=[];



 

  constructor(private http: HttpClient, private loginService: LoginService) {

    this.getJSON().subscribe(data => {
      
      this.filters=data.data;
      console.log(this.filters)
      
  });

    

    // this.loginService.getDate(this.persons).subscribe(data=>{
    //   this.persons = data
    // })
  }


  public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json");
}

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      
      pagingType: 'full_numbers',
      pageLength: 5,
      serverSide: true,
      processing: true,
      searching: true,
      search: false,
      info:false,
      deferRender:    true, 
      scrollCollapse: true,

      // paging: false,
      // dom: '<"bottom"i>rt<"bottom"flp><"clear">',
      
      ajax: (dataTablesParameters: any, callback) => {
        this.loginService.getalldate()
        .subscribe(resp => {
            console.log(resp)

            console.log(this.persons)

            // callback({
            //   recordsTotal: resp.recordsTotal,
            //   recordsFiltered: resp.recordsFiltered,
            //   data: []
            // });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' },],
  
    };
  }




  ngAfterViewInit(): void {

    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

}
