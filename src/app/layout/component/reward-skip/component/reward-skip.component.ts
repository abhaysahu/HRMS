import { Component, OnInit } from '@angular/core';
import { RewardSkipService } from '../service/reward-skip.service';
import { AppResponse } from 'src/app/models/appResponse';

@Component({
  selector: 'app-reward-skip',
  templateUrl: './reward-skip.component.html',
  styleUrls: ['./reward-skip.component.css']
})
export class RewardSkipComponent implements OnInit {

  search: any[]=[];
  rewardList:any[]=[];

  successStatus=false;
  dangerStatus=false;

  message="";

  email="";

  constructor(private rewardservice: RewardSkipService) { }

  ngOnInit() {
  }


  Search(search)
  {
    console.log(search.search)
    let parameter = search.search 

    this.rewardservice.getrewardSkipData(parameter).subscribe(resp =>{
      
      if(resp.Success)
      {
        this.rewardList = resp.Data
        console.log(this.rewardList)
      }
      else
      {
          this.dangerStatus=true;
          this.successStatus=false;
          this.message=resp.ErrorMessage;
          this.message=resp.Message;
      }
      
    },   (error: AppResponse) => {
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
