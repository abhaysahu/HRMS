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

  entity: Entity[]=[];

  status=false;
  message="";

  constructor(private entityService: EntityService) { 
    
  }

  ngOnInit() {
  }


  EntityData(entity)
  {

    this.entityService.entityDataSave(entity).subscribe(resp => {
     
      if(resp.Success)
      {
        this.status=true;
        this.message="Data is Added successfully"
      }
      else
      {
        this.status=true;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      if(error.status === 400)
      {
       this.message = error.message
    
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
}
)


  }



  closeStatus()
  {
    this.status=false;
  }
}
