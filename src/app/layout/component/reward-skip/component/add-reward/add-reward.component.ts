import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RewardSkipService } from '../../service/reward-skip.service';
import { AppResponse } from 'src/app/models/appResponse';

@Component({
  selector: 'app-add-reward',
  templateUrl: './add-reward.component.html',
  styleUrls: ['./add-reward.component.css']
})
export class AddRewardComponent implements OnInit {

  reward:any[]=[]

  successStatus=false;
  dangerStatus=false;

  message="";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddRewardComponent>,
    private rewardservice: RewardSkipService

  ) {
   
   }

  ngOnInit() {
  }

  close()
  {
    this.dialogRef.close();
  }


  submit(data)
  {
    this.rewardservice.AddRewardData(data).subscribe(resp =>{
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
      //  console.log(this.message)
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
