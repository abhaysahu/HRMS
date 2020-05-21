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


  successStatus=false;
  dangerStatus=false;

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

  setIndex(ii){
    this.aa=ii;
  }

  closeStatus()
  {
    this.dangerStatus=false;
    this.successStatus=false;
  }

}
