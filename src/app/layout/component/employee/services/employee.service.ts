import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DropDown } from '../models/dropDown';
import { environment } from 'src/environments/environment';
import { EmployeeData } from '../models/EmployeeData';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  Employee: any={

    FullName: null,
    PersonalEmail: null,
    LoginId: null,
    EmpCode: null,
    DateOfJoining: null,
    DateOfConfirmation: null,
    OfficialEmail: null,
    Department: {
        Value: null,
        Text: null
    },
    Designation: {
        Value: null,
        Text: null
    },
    Grade: {
      Value:null,
      Text: null,
    },
    HighestQualification: null,
    PriorExperience: null,
    MaritalStatus: {
        Value: null,
        Text: null
    },
    Gender: {
        Value: null,
        Text: null
    },
    PrimaryManager: {
        Id: null,
        Name: null
    },
    TriggerChangePwd: true,
    Status: {
        Value: 1,
        Text: null
    },
    Id: null,
    CreatedOn: null,
    CreatedOnUtc: null,
    UpdatedOn: null,
    UpdatedOnUtc: null,
    CreatedBy: {
        Id: null,
        Name: null
    },
    UpdatedBy: null,
  }

  constructor(private httpClient: HttpClient,    private errorHandlingService: ErrorHandlingService
    ) { }

  getemployee(): Observable<EmployeeData>
  {
    return this.httpClient.get<EmployeeData>('assets/emplyee_details.json');
  }


  getParticularEmployee(id): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+`api/user/${id}`, { headers: headers })
  }



  getUser(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/employee', { headers: headers })
  }


  employeeGrade(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=Grade&objectTypeCode=9', { headers: headers })
  }


  employeeStatus(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=StatusCode&objectTypeCode=9', { headers: headers })
  }
  

  listOfDepartment(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=Department&objectTypeCode=9', { headers: headers })
  }


  listOfDesignation(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=Designation&objectTypeCode=9', { headers: headers })
  }
  

  listOfMaritalStatus(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=MaritalStatus&objectTypeCode=9', { headers: headers })
  }


  listOfGender(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/PickList?attributeName=Gender&objectTypeCode=9', { headers: headers })
  }


  UserDataSave(user)
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.post<any>(environment.webapiUrl+'api/add/user',user, { headers: headers })
  } 


  UserEditDetails(RegardingObjectId, AddressType): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })


    const headers = this.errorHandlingService.getauthorization()

    return this.httpClient.get<DropDown>(environment.webapiUrl+`api/search/address?regardingObjectId=${RegardingObjectId}&addressType=${AddressType}`, { headers: headers })
  }


  listOfCountry(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/lookup?objectTypeCode=6', { headers: headers })
  }

  listOfState(): Observable<DropDown>
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.get<DropDown>(environment.webapiUrl+'api/get/lookup?objectTypeCode=7', { headers: headers })
  }


  UserAddressSave(address)
  {
    // const token = sessionStorage.getItem('token')

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'authorization': `bearer ${token}`
    // })

    const headers = this.errorHandlingService.getauthorization()


    return this.httpClient.post<any>(environment.webapiUrl+'api/add/address',address, { headers: headers })
  } 











}
