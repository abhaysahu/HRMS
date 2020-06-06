import { Component, OnInit } from '@angular/core';
import { RewardSkipService } from '../service/reward-skip.service';
import { AppResponse } from 'src/app/models/appResponse';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddRewardComponent } from './add-reward/add-reward.component';

@Component({
  selector: 'app-reward-skip',
  templateUrl: './reward-skip.component.html',
  styleUrls: ['./reward-skip.component.css']
})
export class RewardSkipComponent implements OnInit {

  search: any[]=[];
  rewardListForPobara:any[]=[];
  rewardListForHRMS:any[]=[];

  successStatus=false;
  dangerStatus=false;

  message="";

  email="";

  constructor(private rewardservice: RewardSkipService,private dialog: MatDialog,) { 


      this.rewardservice.getAllRewardSkipData().subscribe(resp =>{
      
      if(resp.Success)
      {
        this.rewardListForHRMS = resp.Data
        console.log(this.rewardListForHRMS)
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

  ngOnInit() {
  }


  Search(search)
  {
    console.log(search.search)
    let parameter = search.search 

    this.rewardservice.getrewardSkipData(parameter).subscribe(resp =>{
      
      if(resp.Success)
      {
        this.rewardListForPobara = resp.Data
        console.log(this.rewardListForPobara)
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



  AddProduct(Id,Name)
  {

    let data={
      ProductId:Id,
	    Name:Name
    }

    let pushData={
      
        ProductId: Id,
        Name: Name,
        CreatedOn: null,
        CreatedOnUtc: null,
        IsActive: true
    }

    // if(this.rewardListForHRMS==null)
    // {
    //   this.rewardListForHRMS=[{}]
    // }
    // else
    // {
    //   console.log("NO")
    // }

    

    


    this.rewardservice.AddRewardData(data).subscribe(resp =>{
      // console.log(resp)
      if(resp.Success)
      {
        this.successStatus=true;
        this.dangerStatus=false;
        this.message="Data is Added successfully"
        this.rewardListForHRMS.push(pushData)
      }
      else
      {
        this.dangerStatus=true;
        this.successStatus=false;
        this.message=resp.Message + " Because record is already exist";
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


  DeleteProduct(ProductId)
  {
    
    let deletes = {
      Id:ProductId,
	    EntityCode:13
    }

     let index = this.rewardListForHRMS.findIndex(x => x.ProductId === ProductId);
     console.log(index)




    this.rewardservice.DeleteRewardData(deletes).subscribe(resp =>{
      // console.log(resp)
      if(resp.Success)
      {
        this.successStatus=true;
        this.dangerStatus=false;
        this.message="Data is Delete successfully"
        this.rewardListForHRMS.splice(index,1);
        console.log(this.rewardListForHRMS)
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






  updateTheStatus(event,Id,index)
  {

    console.log(Id)
    let status=event.target.checked
    console.log(index)
    let data ={
      ProductId:Id,
      IsActive:status
    }

    console.log(data)



    this.rewardservice.upDateRewardData(data).subscribe(resp => {

      console.log(resp)
     
      if(resp.Success)
      {
        this.successStatus=true;
        this.dangerStatus=false;
        this.message="Data is update successfully"
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
