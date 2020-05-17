import { Component, OnInit } from '@angular/core';
import { Entity } from '../model/entity';
import { EntityService } from '../service/entity.service';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {

  entity: Entity;

  email="";
  aa:boolean=false;
  search="";

  constructor(private entityService: EntityService) { 

    /*this.entityService.getEntityData().subscribe(resp =>{
      console.log(resp)
      this.entity = resp
      console.log(this.entity)
    })*/
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
