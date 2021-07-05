import { Component, OnInit } from '@angular/core';
import { Entity } from '../../model/entity';
import { EntityService } from '../../service/entity.service';
import { AppResponse } from 'src/app/models/appResponse';
import { ErrorHandlingService } from 'src/app/service/error-handling.service';
import { CustomToastrService } from 'src/app/service/customToastr.service';

@Component({
  selector: 'app-entity-save',
  templateUrl: './entity-save.component.html',
  styleUrls: ['./entity-save.component.css']
})
export class EntitySaveComponent implements OnInit {

  entity: Entity;

  // successStatus=false;
  // dangerStatus=false;
  message="";

  constructor(private entityService: EntityService, private errorHandlingService: ErrorHandlingService,     
     private customToastrService: CustomToastrService,
    ) { 

    this.entity = {
        
      Name: null,
      LogicalName: null,
      SchemaName: "dbo",
      // ObjectTypeCode: null,
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
        // this.successStatus=true;
        // this.dangerStatus=false;
        this.message="Data is Added successfully"

        this.customToastrService.GetSuccessToastr(this.message, "Employer Save Status", 5000)


        setTimeout(()=>
        {    

          // this.successStatus=false;
          // this.dangerStatus=false;

          this.entity = 
          {
            Name: null,
            LogicalName: null,
            SchemaName: "dbo",
            // ObjectTypeCode: null,
            Description: "",
            IsMasterEntity: true,
            PrimaryAttribute: null,
            PrimaryKey: null,
          }
      
        }, 3000);
      }
      else
      {
        // this.dangerStatus=true;
        // this.successStatus=false;
        this.message=resp.Message;
      }
      
    }
    ,   (error: AppResponse) => {
      this.errorHandlingService.errorStatus(error,"Employer Status")

}
)


  }

  closeStatus()
  {
    // this.dangerStatus=false;
    // this.successStatus=false;
  }
}
