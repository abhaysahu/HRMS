import { Component, OnInit } from '@angular/core';
import { AppResponse } from 'src/app/models/appResponse';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { ReportService } from '../../service/report.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-unsold-products',
  templateUrl: './unsold-products.component.html',
  styleUrls: ['./unsold-products.component.css']
})
export class UnsoldProductsComponent implements OnInit {

  UnsoldProduct: any[]=[];
  message;
  email;
  ascNumberSort;

  sortIcon1="fa fa-sort"
  sortIcon2="fa fa-sort"
  sortIcon3="fa fa-sort"
  sortIcon4="fa fa-sort"
  sortIcon5="fa fa-sort"
  sortIcon6="fa fa-sort"
  sortIcon7="fa fa-sort"
  sortIcon8="fa fa-sort"

  constructor(
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService,
    private reportService: ReportService) { }

  ngOnInit() {
  }

  getListOfProductByDate(event)
  {
    let date = event.target.value;
    let date1 = new Date(date)
    // console.log(date1)
    // console.log(date1.getDate());
    // console.log(date1.getMonth()+1);
    // console.log(date1.getFullYear());

    var date12 =new Date(`${date1.getMonth()+1}/${date1.getDate()}/${date1.getFullYear()}`);

    console.log(date12);

    // var date1 = new Date("06/30/2019"); 

    var date2 = new Date(); 
    var date22 = new Date(`${date2.getMonth()+1}/${date2.getDate()}/${date2.getFullYear()}`);
    console.log(date22)

    var Difference_In_Time = date22.getTime() - date12.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

    if(Difference_In_Days < 0)
    {
      this.customToastrService.GetErrorToastr("Date should be previous", "Filter Status", 5000)
    }
    else
    {
      this.reportService.getListOfProduct(Difference_In_Days).subscribe(resp =>{
        console.log(resp)
        if(resp.Success)
        {
          this.UnsoldProduct = resp.Data
          
        }
        else
        {
          this.message=resp.ErrorMessage;
          this.customToastrService.GetErrorToastr(this.message, "Unsold Report Status", 5000)
        }
      }
      ,   (error: AppResponse) => {
        this.errorHandlingService.errorStatus(error,"Unsold Report Status")
      }
    )

    }
      
    

  }

  getListOfProduct(event)
  {
    let NumberOfDay = event.target.value;
    
    console.log(NumberOfDay);


    this.reportService.getListOfProduct(NumberOfDay).subscribe(resp =>{
      console.log(resp)
      if(resp.Success)
      {
        this.UnsoldProduct = resp.Data
        
      }
      else
      {
        this.message=resp.ErrorMessage;
        this.customToastrService.GetErrorToastr(this.message, "Unsold Report Status", 5000)
      }
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Unsold Report Status")
    }
  )
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
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>a.ProductName.localeCompare(b.ProductName)); // For ascending sort
      }
      else
      {
        this.sortIcon1="fa fa-sort-asc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>b.ProductName.localeCompare(a.ProductName)); // For descending sort
      }
    }

    else if(value == 2)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon2="fa fa-sort-desc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>a.SellingPrice - b.SellingPrice); // For ascending sort
      }
      else
      {
        this.sortIcon2="fa fa-sort-asc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>b.SellingPrice - a.SellingPrice); // For descending sort
      }
    }

    else if(value == 3)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon3="fa fa-sort-desc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>a.MRP - b.MRP); // For ascending sort
      }
      else
      {
        this.sortIcon3="fa fa-sort-asc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>b.MRP - a.MRP); // For ascending sort
      }
    }

    else if(value == 4)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon4="fa fa-sort-desc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>a.BuyingCost - b.BuyingCost); // For ascending sort
      }
      else
      {
        this.sortIcon4="fa fa-sort-asc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>b.BuyingCost - a.BuyingCost); // For ascending sort
      }
    }

    else if(value == 5)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon5="fa fa-sort-desc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>a.StockQuantity - b.StockQuantity); // For ascending sort
      }
      else
      {
        this.sortIcon5="fa fa-sort-asc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>b.StockQuantity - a.StockQuantity); // For ascending sort
      }
    }

    else if(value == 6)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon6="fa fa-sort-desc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>a.SoldQuantity - b.SoldQuantity); // For ascending sort
      }
      else
      {
        this.sortIcon6="fa fa-sort-asc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>b.SoldQuantity - a.SoldQuantity); // For ascending sort
      }
    }

    else if(value == 7)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort)
      {
        this.sortIcon7="fa fa-sort-desc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>a.DaysToLastOrder - b.DaysToLastOrder); // For ascending sort
      }
      else
      {
        this.sortIcon7="fa fa-sort-asc"
        this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>b.DaysToLastOrder - a.DaysToLastOrder); // For ascending sort
      }
    }

    // else if(value == 8)
    // {
    //   this.ascNumberSort = !this.ascNumberSort;
    //   if(this.ascNumberSort)
    //   {
    //     this.sortIcon8="fa fa-sort-desc"
    //     this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>a.PrimaryKey.localeCompare(b.PrimaryKey)); // For ascending sort
    //   }
    //   else
    //   {
    //     this.sortIcon8="fa fa-sort-asc"
    //     this.UnsoldProduct=this.UnsoldProduct.sort((a,b)=>b.PrimaryKey.localeCompare(a.PrimaryKey)); // For descending sort
    //   }
    // }
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
  }

}



