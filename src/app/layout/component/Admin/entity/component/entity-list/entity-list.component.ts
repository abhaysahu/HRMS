import { Component, OnInit } from '@angular/core';
import { Entity } from '../../model/entity';
import { EntityService } from '../../service/entity.service';
import { EntityList } from '../../model/entityList';
import { AppResponse } from 'src/app/models/appResponse';
import { CustomToastrService } from 'src/app/service/customToastr.service';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';


export class Entitys { 

  Name: string
  LogicalName: string
  SchemaName: string
  ObjectTypeCode: number
  Description: string
  IsMasterEntity: boolean
  PrimaryAttribute: string
  PrimaryKey: string
}

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {

  // entity: EntityList[]=[]
  ascNumberSort = true;
  indexs:any[]=[];
  entity:Entitys[]=[];
  
  sortIcon1="fa fa-sort"
  sortIcon2="fa fa-sort"
  sortIcon3="fa fa-sort"
  sortIcon4="fa fa-sort"
  sortIcon5="fa fa-sort"
  sortIcon6="fa fa-sort"
  sortIcon7="fa fa-sort"
  sortIcon8="fa fa-sort"


  // successStatus=false;
  // dangerStatus=false;

  message="";

  email="";

  aa:boolean=false;
  search="";

  constructor(private entityService: EntityService, 
    private customToastrService: CustomToastrService,
    private errorHandlingService: ErrorHandlingService
    ) { 

    

    this.entityService.getEntityData().subscribe(resp =>{
   
      if(resp.Success)
      {
        this.entity = resp.Data
      }
      else
      {
          // this.dangerStatus=true;
          // this.successStatus=false;
          this.message=resp.ErrorMessage;
          this.message=resp.Message;
          this.customToastrService.GetErrorToastr(this.message, "Entity List Status", 5000)

      }
      
    },   (error: AppResponse) => {
      
      this.errorHandlingService.errorStatus(error,"Login Status")

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
        this.entity=this.entity.sort((a,b)=>a.Name.localeCompare(b.Name)); // For ascending sort
      } 
      else 
      {
        this.sortIcon1="fa fa-sort-asc"
        this.entity=this.entity.sort((a,b)=>b.Name.localeCompare(a.Name)); // For descending sort
      }
    }

    else if(value == 2)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon2="fa fa-sort-desc"
        this.entity=this.entity.sort((a,b)=>a.LogicalName.localeCompare(b.LogicalName)); // For ascending sort
      } 
      else 
      {
        this.sortIcon2="fa fa-sort-asc"
        this.entity=this.entity.sort((a,b)=>b.LogicalName.localeCompare(a.LogicalName)); // For descending sort
      }
    }

    else if(value == 3)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon3="fa fa-sort-desc"
        this.entity=this.entity.sort((a,b)=>a.SchemaName.localeCompare(b.SchemaName)); // For ascending sort
      } 
      else 
      {
        this.sortIcon3="fa fa-sort-asc"
        this.entity=this.entity.sort((a,b)=>b.SchemaName.localeCompare(a.SchemaName)); // For descending sort
      }
    }

    else if(value == 4)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon4="fa fa-sort-desc"
        this.entity=this.entity.sort((a,b)=>a.ObjectTypeCode - b.ObjectTypeCode); // For ascending sort
      } 
      else 
      {
        this.sortIcon4="fa fa-sort-asc"
        this.entity=this.entity.sort((a,b)=>b.ObjectTypeCode - a.ObjectTypeCode); // For descending sort
      }
    }

    else if(value == 5)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon5="fa fa-sort-desc"
        this.entity=this.entity.sort((a,b)=>a.Description.localeCompare(b.Description)); // For ascending sort
      } 
      else 
      {
        this.sortIcon5="fa fa-sort-asc"
        this.entity=this.entity.sort((a,b)=>b.Description.localeCompare(a.Description)); // For descending sort
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
        this.entity=this.entity.sort((a,b)=>a.PrimaryAttribute.localeCompare(b.PrimaryAttribute)); // For ascending sort
      } 
      else 
      {
        this.sortIcon7="fa fa-sort-asc"
        this.entity=this.entity.sort((a,b)=>b.PrimaryAttribute.localeCompare(a.PrimaryAttribute)); // For descending sort
      }
    }

    else if(value == 8)
    {
      this.ascNumberSort = !this.ascNumberSort;
      if(this.ascNumberSort) 
      {
        this.sortIcon8="fa fa-sort-desc"
        this.entity=this.entity.sort((a,b)=>a.PrimaryKey.localeCompare(b.PrimaryKey)); // For ascending sort
      } 
      else 
      {
        this.sortIcon8="fa fa-sort-asc"
        this.entity=this.entity.sort((a,b)=>b.PrimaryKey.localeCompare(a.PrimaryKey)); // For descending sort
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
