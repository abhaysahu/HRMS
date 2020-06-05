import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UpdatePopup } from '../../model/Updatepopup.modeule';
import { StringMapService } from '../../service/string-map.service';
import { AppResponse } from 'src/app/models/appResponse';


@Component({
  selector: 'app-editpicklist',
  templateUrl: './editpicklist.component.html',
  styleUrls: ['./editpicklist.component.css']
})


export class EditpicklistComponent implements OnInit {

  editpicklist: any

  successStatus=false;
  dangerStatus=false;
  message="";

 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<EditpicklistComponent>,

    private stringMapService: StringMapService

    
  
  ) { 

    // console.log(data)
  }

  ngOnInit() {

    this.editpicklist = this.data[0]

  }

  close()
  {
    this.dialogRef.close();
  }

  submit(editpicklists)
  {
    if(this.editpicklist.Id == "")
    {
      // console.log(editpicklists)
      this.stringMapService.stringMapDataAdd(editpicklists).subscribe(resp=>{
      
        if(resp.Success)
        {
          this.successStatus=true;
          this.dangerStatus=false;
          this.message="Data is Added successfully"

          setTimeout(()=>
          {    
            this.dialogRef.close();
          }, 3000);
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
    else
    {
      editpicklists.Id = this.editpicklist.Id

      console.log(editpicklists)
      this.stringMapService.stringMapDataUpdate(editpicklists).subscribe(resp=>{
        if(resp.Success)
        {
          this.successStatus=true;
          this.dangerStatus=false;
          this.message="Data is Update successfully"

          setTimeout(()=>
          {    
            this.dialogRef.close();
          }, 3000);
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
    

       
  }

  closeStatus()
  {
    this.dangerStatus=false;
    this.successStatus=false;
  }
  

}
