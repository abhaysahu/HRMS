import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UpdatePopup } from '../model/Updatepopup.modeule';
import { StringMapService } from '../service/string-map.service';
import { AppResponse } from 'src/app/models/appResponse';


@Component({
  selector: 'app-editpicklist',
  templateUrl: './editpicklist.component.html',
  styleUrls: ['./editpicklist.component.css']
})


export class EditpicklistComponent implements OnInit {

  editpicklist: any

  status=false;
  message="";

 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<EditpicklistComponent>,

    private stringMapService: StringMapService

    
  
  ) { 

    console.log(data)
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

    console.log(editpicklists.Id)
    if(this.editpicklist.Id == "")
    {
      console.log("yes")
      console.log(editpicklists)
      this.stringMapService.stringMapDataAdd(editpicklists).subscribe(resp=>{
        console.log(resp)
        if(resp.Success)
        {
          this.status=true;
          this.message="Data is updated successful"
        }
        else
        {
          this.status=true;
          this.message=resp.Message;
        }
        
      }
      ,   (error: AppResponse) => {
        if(error.status === 400)
        {
         this.message = error.message
         console.log(this.message)
        }
        else if(error.status === 401)
        {
          this.status=true;
          this.message = "Authorization has been denied for this request And You have to Login again."
        }       
         else
         {
            this.status=true;
            this.message = error.message;
         }
  }
  )

      
    }
    else
    {
      // console.log(this.editpicklist)
      editpicklists.Id = this.editpicklist.Id

      console.log(editpicklists)
      this.stringMapService.stringMapDataUpdate(editpicklists).subscribe(resp=>{
        console.log(resp)
        if(resp.Success)
        {
          this.status=true;
          this.message="Data is updated successful"
        }
        else
        {
          this.status=true;
          this.message=resp.Message;
        }
        
      }
      ,   (error: AppResponse) => {
        if(error.status === 400)
        {
         this.message = error.message
         console.log(this.message)
        }
        else if(error.status === 401)
        {
          this.status=true;
          this.message = "Authorization has been denied for this request And You have to Login again."
        }       
         else
         {
            this.status=true;
            this.message = error.message;
         }
  }
  )  
    }
    

       
  }
  

}
