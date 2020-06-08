import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor( private toastr: ToastrService) { }

  GetSuccessToastr(Message, Status, time)
  {
    return this.toastr.success(Message, Status, {
      progressBar: true, 
      timeOut: time,
    });
  }


  GetErrorToastr(Message, Status, time)
  {
    return this.toastr.error(Message, Status, {
      progressBar: true, 
      timeOut: time,
      
    });
  }


  GetInfoToastr(Message, Status, time)
  {
    return this.toastr.info(Message, Status, {
      progressBar: true, 
      timeOut: time
    });
  }

}
