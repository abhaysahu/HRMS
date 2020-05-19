import { Component, OnInit } from '@angular/core';
import { Entity } from '../model/entity';
import { EntityService } from '../service/entity.service';
import { EntityList } from '../model/entityList';
import { AppResponse } from 'src/app/models/appResponse';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {

  entity: EntityList[]=[]

  indexs:any[]=[];


  status=false;
  message="";

  email="";

  aa:boolean=false;
  search="";

  constructor(private entityService: EntityService) { 

    this.entityService.getEntityData().subscribe(resp =>{
      console.log(resp)
      if(resp.Success)
      {
        this.entity = resp.Data
        console.log(this.entity)
      }
      else
      {
          this.status=true;
          this.message=resp.ErrorMessage;
      }
      
    },   (error: AppResponse) => {
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
})


  }

  ngOnInit() {
  }


  Search(value)
  {
    console.log(value)
  }


  setIndex(ii){
    this.aa=ii;
    console.log("yes")
  }

}
