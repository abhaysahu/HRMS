import { Component, OnInit } from '@angular/core';
import { AppResponse } from 'src/app/models/appResponse';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { VenderService } from '../../service/vender.service';


export class Venders {

  Name: string
  Category: string
  AddressLine1: string
  AddressLine2: string
  City: string
  Zip: number
  PrimaryContactPerson: string
  PrimaryContactPersonEmail: string
  PrimaryContactPersonPhone: string
}


@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {
  ascNumberSort = true;
  indexs:any[]=[];
  vender:Venders[]=[];

  sortIcon1="fa fa-sort"
  sortIcon2="fa fa-sort"
  sortIcon3="fa fa-sort"
  sortIcon4="fa fa-sort"
  sortIcon5="fa fa-sort"
  sortIcon6="fa fa-sort"
  sortIcon7="fa fa-sort"
  sortIcon8="fa fa-sort"
  sortIcon9="fa fa-sort"



  // successStatus=false;
  // dangerStatus=false;

  message="";

  email="";

  aa:boolean=false;
  search="";

  constructor(private venderService: VenderService,
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService
    ) {



    this.venderService.getVenderData().subscribe(resp =>{

      if(resp.Success)
      {
        this.vender = resp.Data
      }
      else
      {
          // this.dangerStatus=true;
          // this.successStatus=false;
          this.message=resp.ErrorMessage;
          this.message=resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Vender List Status", 5000)

      }

    },   (error: AppResponse) => {

      this.errorHandlingService.errorStatus(error,"Vender List Status")

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
        this.vender=this.vender.sort((a,b)=>a.Name.localeCompare(b.Name)); // For ascending sort
      }
      else
      {
        this.sortIcon1="fa fa-sort-asc"
        this.vender=this.vender.sort((a,b)=>b.Name.localeCompare(a.Name)); // For descending sort
      }
    }

    else if(value == 2)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon2="fa fa-sort-desc"
        this.vender=this.vender.sort((a,b)=>a.Category.localeCompare(b.Category)); // For ascending sort
      }
      else
      {
        this.sortIcon2="fa fa-sort-asc"
        this.vender=this.vender.sort((a,b)=>b.Category.localeCompare(a.Category)); // For descending sort
      }
    }

    else if(value == 3)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon3="fa fa-sort-desc"
        this.vender=this.vender.sort((a,b)=>a.AddressLine1.localeCompare(b.AddressLine1)); // For ascending sort
      }
      else
      {
        this.sortIcon3="fa fa-sort-asc"
        this.vender=this.vender.sort((a,b)=>b.AddressLine1.localeCompare(a.AddressLine1)); // For descending sort
      }
    }

    else if(value == 4)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon4="fa fa-sort-desc"
        this.vender=this.vender.sort((a,b)=>a.AddressLine2.localeCompare(b.AddressLine2)); // For ascending sort
      }
      else
      {
        this.sortIcon4="fa fa-sort-asc"
        this.vender=this.vender.sort((a,b)=>b.AddressLine2.localeCompare(a.AddressLine2)); // For descending sort
      }
    }

    else if(value == 5)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon5="fa fa-sort-desc"
        this.vender=this.vender.sort((a,b)=>a.City.localeCompare(b.City)); // For ascending sort
      }
      else
      {
        this.sortIcon5="fa fa-sort-asc"
        this.vender=this.vender.sort((a,b)=>a.City.localeCompare(b.City)); // For ascending sort
      }
    }

    else if(value == 6)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon6="fa fa-sort-desc"
        this.vender=this.vender.sort((a,b)=>a.Zip - b.Zip); // For ascending sort
      }
      else
      {
        this.sortIcon6="fa fa-sort-asc"
        this.vender=this.vender.sort((a,b)=>b.Zip - a.Zip); // For descending sort
      }
    }

    // else if(value == 6)
    // {
    //   this.ascNumberSort = !this.ascNumberSort;
    //   if(this.ascNumberSort)
    //   {
    //     this.sortIcon6="fa fa-sort-desc"
    //     this.entity=this.entity.sort((a,b)=>a.IsMasterEntity.localeCompare(b.IsMasterEntity)); // For ascending sort
    //   }
    //   else
    //   {
    //     this.sortIcon6="fa fa-sort-asc"
    //     this.entity=this.entity.sort((a,b)=>b.IsMasterEntity.localeCompare(a.IsMasterEntity)); // For descending sort
    //   }
    // }

    else if(value == 7)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon7="fa fa-sort-desc"
        this.vender=this.vender.sort((a,b)=>a. PrimaryContactPerson.localeCompare(b. PrimaryContactPerson)); // For ascending sort
      }
      else
      {
        this.sortIcon7="fa fa-sort-asc"
        this.vender=this.vender.sort((a,b)=>b. PrimaryContactPerson.localeCompare(a. PrimaryContactPerson)); // For descending sort
      }
    }

    else if(value == 8)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon8="fa fa-sort-desc"
        this.vender=this.vender.sort((a,b)=>a. PrimaryContactPersonEmail.localeCompare(b. PrimaryContactPersonEmail)); // For ascending sort
      }
      else
      {
        this.sortIcon8="fa fa-sort-asc"
        // tslint:disable-next-line: max-line-length
        this.vender=this.vender.sort((a,b)=>b. PrimaryContactPersonEmail.localeCompare(a. PrimaryContactPersonEmail)); // For descending sort
      }
    }

    else if(value == 9)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon9="fa fa-sort-desc"
        this.vender=this.vender.sort((a,b)=>a. PrimaryContactPersonPhone.localeCompare(b. PrimaryContactPersonPhone)); // For ascending sort
      }
      else
      {
        this.sortIcon9="fa fa-sort-asc"
        // tslint:disable-next-line: max-line-length
        this.vender=this.vender.sort((a,b)=>b. PrimaryContactPersonPhone.localeCompare(a. PrimaryContactPersonPhone)); // For descending sort
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





