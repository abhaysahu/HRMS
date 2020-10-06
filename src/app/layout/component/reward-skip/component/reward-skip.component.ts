import { Component, OnInit } from '@angular/core';
import { RewardSkipService } from '../service/reward-skip.service';
import { AppResponse } from 'src/app/models/appResponse';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';

@Component({
  selector: 'app-reward-skip',
  templateUrl: './reward-skip.component.html',
  styleUrls: ['./reward-skip.component.css']
})
export class RewardSkipComponent implements OnInit {

  search: any[]=[];
  rewardListForPobara:any[]=[];
  rewardListForHRMS:any[]=[];

  message="";

  email="";

  constructor(private rewardservice: RewardSkipService,
    private dialog: MatDialog,
    private errorHandlingService: ErrorHandlingService,    
    private customToastrService: CustomToastrService,

    ) { 

      console.log("yes")
      this.rewardservice.getAllRewardSkipData().subscribe(resp =>{
      
      if(resp.Success)
      {
        this.rewardListForHRMS = resp.Data
        console.log(this.rewardListForHRMS)
      }
      else
      {
         
          this.message=resp.ErrorMessage;
          this.message=resp.Message;

          this.customToastrService.GetErrorToastr(this.message, "Reward Skip", 5000)
      }
      
    },   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Reward Skip")

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
        if(this.rewardListForPobara==null)
        {
          this.customToastrService.GetInfoToastr("No product found!!", "Reward Skip", 5000)
        }
        console.log(this.rewardListForPobara)
      }
      else
      {
          
          this.message=resp.ErrorMessage;
          this.message=resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Reward Skip", 5000)
      }
      
    },   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Reward Skip Status")

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
        
        this.message="Data is Added successfully"
        this.rewardListForHRMS.push(pushData)
        this.customToastrService.GetSuccessToastr(this.message, "Reward Skip Status", 5000)

      }
      else
      {
        
        this.message=resp.Message + " Because record is already exist";
        this.customToastrService.GetInfoToastr(this.message, "Reward Skip", 5000)
      }
      
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Reward Skip Status")

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
        
        this.message="Data is Delete successfully"
        this.rewardListForHRMS.splice(index,1);
        console.log(this.rewardListForHRMS)
        this.customToastrService.GetSuccessToastr(this.message, "Reward Skip Status", 5000)

        
      }
      else
      {
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Reward Skip", 5000)

      }
      
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Reward Skip Status")

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
        
        this.message="Data is update successfully"
        this.customToastrService.GetSuccessToastr(this.message, "Reward Skip Status", 5000)

      }
      else
      {
        this.message=resp.Message;
        this.customToastrService.GetErrorToastr(this.message, "Reward Skip", 5000)

      }
      
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Reward Skip Status")
}
)
  }
}
