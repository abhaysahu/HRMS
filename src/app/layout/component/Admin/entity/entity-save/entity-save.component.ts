import { Component, OnInit } from '@angular/core';
import { Entity } from '../model/entity';
import { EntityService } from '../service/entity.service';

@Component({
  selector: 'app-entity-save',
  templateUrl: './entity-save.component.html',
  styleUrls: ['./entity-save.component.css']
})
export class EntitySaveComponent implements OnInit {

  entity: Entity[]=[];

  constructor(private entityService: EntityService) { }

  ngOnInit() {
  }


  EntityData(entity)
  {
    this.entityService.entityDataSave(entity).subscribe(data => {
      console.log(data)
    })

  }
}
