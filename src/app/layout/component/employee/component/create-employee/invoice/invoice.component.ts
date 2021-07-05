import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PrintService} from '../../../services/print.service';
import { RewardSkipService } from 'src/app/layout/component/reward-skip/service/reward-skip.service';
import { AppResponse } from 'src/app/models/appResponse';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

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
