import { Component, OnInit } from '@angular/core';
import { Entity } from '../model/entity';
import { EntityService } from '../service/entity.service';
import { AppResponse } from 'src/app/models/appResponse';

@Component({
  selector: 'app-entity-save',
  templateUrl: './entity-save.component.html',
  styleUrls: ['./entity-save.component.css']
})
export class EntitySaveComponent implements OnInit {

  entity: Entity;

  successStatus=false;
  dangerStatus=false;
  message="";

  constructor(private entityService: EntityService) { 

    this.entity = {
        
      Name: null,
      LogicalName: null,
      SchemaName: "dbo",
      ObjectTypeCode: null,
      Description: "",
      IsMasterEntity: true,
      PrimaryAttribute: null,
      PrimaryKey: null,
    }
    
  }

  ngOnInit() {
  }


  EntityData(entity)
  {
    this.entityService.entityDataSave(entity).subscribe(resp => {
     
      if(resp.Success)
      {
        this.successStatus=true;
        this.dangerStatus=false;
        this.message="Data is Added successfully"

        setTimeout(()=>
        {    

          this.successStatus=false;
          this.dangerStatus=false;

          this.entity = 
          {
            Name: null,
            LogicalName: null,
            SchemaName: "dbo",
            ObjectTypeCode: null,
            Description: "",
            IsMasterEntity: true,
            PrimaryAttribute: null,
            PrimaryKey: null,
          }
      
        }, 3000);
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

  closeStatus()
  {
    this.dangerStatus=false;
    this.successStatus=false;
  }
}
