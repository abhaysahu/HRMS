import { Component, OnInit } from '@angular/core';
import { AppResponse } from 'src/app/models/appResponse';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { LenderService } from '../service/lender.service';
// import { VenderService } from '../../service/vender.service';



export class Lenders {

  Amount: number;
  Payment: string;
  ReceiverObjectTypeCode: number;
  Receiver: string;
  PaymentRefNo: number;
  LenderObjectTypeCode: number;
  Lender: string;
  YearlyInterestPer: number;
  IsPartnerFunding: boolean;
  Tenure: string;
  InPaymentTerms: boolean;
  StartDate: string;
  EndDate: string;
  OnlyPayInterest: boolean;
  RepaymentAmount: string;
  CurrentOutStanding: string;
  OutStandingLastUpdatedOn: string;
}


@Component({
  selector: 'app-lender',
  templateUrl: './lender.component.html',
  styleUrls: ['./lender.component.css']
})
export class LenderComponent implements OnInit {
  ascNumberSort = true;
  indexs:any[]=[];
  lender:Lenders[]=[];

  sortIcon1="fa fa-sort"
  sortIcon2="fa fa-sort"
  sortIcon3="fa fa-sort"
  sortIcon4="fa fa-sort"
  sortIcon5="fa fa-sort"
  sortIcon6="fa fa-sort"
  sortIcon7="fa fa-sort"
  sortIcon8="fa fa-sort"
  sortIcon9="fa fa-sort"
  sortIcon10="fa fa-sort"
  sortIcon11="fa fa-sort"
  sortIcon12="fa fa-sort"
  sortIcon13="fa fa-sort"
  sortIcon14="fa fa-sort"
  sortIcon15="fa fa-sort"
  sortIcon16="fa fa-sort"
  sortIcon17="fa fa-sort"






  // successStatus=false;
  // dangerStatus=false;

  message="";

  email="";

  aa:boolean=false;
  search="";

  constructor(private venderService: LenderService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService
    ) {



    this.venderService.getLenderData().subscribe(resp =>{

      if(resp.Success)
      {
        this.lender = resp.Data
      }
      else
      {
          // this.dangerStatus=true;
          // this.successStatus=false;
          this.message=resp.ErrorMessage;
          this.message=resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Lender List Status", 5000)

      }

    },   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"Lender List Status")

}
)


  }

  ngOnInit() {

  }

  sortFilter(value)
  {
    this.disable();
    if(value == 1)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon1="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.Amount - b.Amount); // For ascending sort
      }
      else
      {
        this.sortIcon1="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.Amount - a.Amount); // For descending sort
      }
    }

    else if(value == 2)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon2="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.Payment.localeCompare(b.Payment)); // For ascending sort
      }
      else
      {
        this.sortIcon2="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.Payment.localeCompare(a.Payment)); // For descending sort
      }
    }

    else if(value == 3)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon3="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.ReceiverObjectTypeCode - b.ReceiverObjectTypeCode); // For ascending sort
      }
      else
      {
        this.sortIcon3="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.ReceiverObjectTypeCode - a.ReceiverObjectTypeCode); // For descending sort
      }
    }

    else if(value == 4)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon4="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.Receiver.localeCompare(b.Receiver)); // For ascending sort
      }
      else
      {
        this.sortIcon4="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.Receiver.localeCompare(a.Receiver)); // For descending sort
      }
    }

    else if(value == 5)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon5="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.PaymentRefNo - b.PaymentRefNo); // For ascending sort
      }
      else
      {
        this.sortIcon5="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.PaymentRefNo - a.PaymentRefNo); // For descending sort
      }
    }

    else if(value == 6)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon6="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.LenderObjectTypeCode - b.LenderObjectTypeCode); // For ascending sort
      }
      else
      {
        this.sortIcon6="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.LenderObjectTypeCode - a.LenderObjectTypeCode); // For descending sort
      }
    }

    else if(value == 7)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon7="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.Lender.localeCompare(b.Lender)); // For ascending sort
      }
      else
      {
        this.sortIcon7="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.Lender.localeCompare(a.Lender)); // For descending sort
      }
    }



    else if(value == 8)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon8="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.YearlyInterestPer - b.YearlyInterestPer); // For ascending sort
      }
      else
      {
        this.sortIcon8="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.YearlyInterestPer - a.YearlyInterestPer); // For descending sort
      }
    }

     // else if(value == 9)
    // {
    //   this.ascNumberSort = !this.ascNumberSort;
    //   if(this.ascNumberSort)
    //   {
    //     this.sortIcon9="fa fa-sort-desc"
    //     this.entity=this.entity.sort((a,b)=>a.IsPartnerFunding.localeCompare(b.IsPartnerFunding)); // For ascending sort
    //   }
    //   else
    //   {
    //     this.sortIcon9="fa fa-sort-asc"
    //     this.entity=this.entity.sort((a,b)=>b.IsPartnerFunding.localeCompare(a.IsPartnerFunding)); // For descending sort
    //   }
    // }

    else if(value == 10)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon10="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.Tenure.localeCompare(b. Tenure)); // For ascending sort
      }
      else
      {
        this.sortIcon10="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b. Tenure.localeCompare(a. Tenure)); // For descending sort
      }
    }
      // else if(value == 11)
    // {
    //   this.ascNumberSort = !this.ascNumberSort;
    //   if(this.ascNumberSort)
    //   {
    //     this.sortIcon11="fa fa-sort-desc"
    //     this.entity=this.entity.sort((a,b)=>a.InPaymentTerms.localeCompare(b.InPaymentTerms)); // For ascending sort
    //   }
    //   else
    //   {
    //     this.sortIcon11="fa fa-sort-asc"
    //     this.entity=this.entity.sort((a,b)=>b.InPaymentTerms.localeCompare(a.InPaymentTerms)); // For descending sort
    //   }
    // }

    else if(value == 12)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon12="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.StartDate.localeCompare(b.StartDate)); // For ascending sort
      }
      else
      {
        this.sortIcon12="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.StartDate.localeCompare(a.StartDate)); // For descending sort
      }
    }


    else if(value == 13)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon13="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.EndDate.localeCompare(b.EndDate)); // For ascending sort
      }
      else
      {
        this.sortIcon13="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.EndDate.localeCompare(a.EndDate)); // For descending sort
      }
    }

    // else if(value == 14)
    // {
    //   this.ascNumberSort = !this.ascNumberSort;
    //   if(this.ascNumberSort)
    //   {
    //     this.sortIcon14="fa fa-sort-desc"
    //     this.entity=this.entity.sort((a,b)=>a.OnlyPayInterest.localeCompare(b.OnlyPayInterest)); // For ascending sort
    //   }
    //   else
    //   {
    //     this.sortIcon14="fa fa-sort-asc"
    //     this.entity=this.entity.sort((a,b)=>b.OnlyPayInterest.localeCompare(a.OnlyPayInterest)); // For descending sort
    //   }
    // }
    else if(value == 15)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon15="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.RepaymentAmount.localeCompare(b.RepaymentAmount)); // For ascending sort
      }
      else
      {
        this.sortIcon15="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.RepaymentAmount.localeCompare(a.RepaymentAmount)); // For descending sort
      }
    }





    else if(value == 16)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon16="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.CurrentOutStanding.localeCompare(b.CurrentOutStanding)); // For ascending sort
      }
      else
      {
        this.sortIcon16="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.CurrentOutStanding.localeCompare(a.CurrentOutStanding)); // For descending sort
      }
    }
    else if(value == 17)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon17="fa fa-sort-desc"
        this.lender=this.lender.sort((a,b)=>a.OutStandingLastUpdatedOn.localeCompare(b.OutStandingLastUpdatedOn)); // For ascending sort
      }
      else
      {
        this.sortIcon17="fa fa-sort-asc"
        this.lender=this.lender.sort((a,b)=>b.OutStandingLastUpdatedOn.localeCompare(a.OutStandingLastUpdatedOn)); // For descending sort
      }
    }

  }


  disable()
  {
    this.sortIcon1="fa fa-sort"
    this.sortIcon2="fa fa-sort"
    this.sortIcon3="fa fa-sort"
    this.sortIcon4="fa fa-sort"
    this.sortIcon5="fa fa-sort"
    this.sortIcon6="fa fa-sort"
    this.sortIcon7="fa fa-sort"
    this.sortIcon8="fa fa-sort"
    this.sortIcon9="fa fa-sort"
    this.sortIcon10="fa fa-sort"
    this.sortIcon11="fa fa-sort"
    this.sortIcon12="fa fa-sort"
    this.sortIcon13="fa fa-sort"
    this.sortIcon14="fa fa-sort"
    this.sortIcon15="fa fa-sort"
    this.sortIcon16="fa fa-sort"
    this.sortIcon17="fa fa-sort"


  }

  setIndex(ii){
    this.aa=ii;
  }

  closeStatus()
  {
    // this.dangerStatus=false;
    // this.successStatus=false;
  }

}







