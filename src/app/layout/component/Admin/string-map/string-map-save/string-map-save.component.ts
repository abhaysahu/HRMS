import { Component, OnInit } from '@angular/core';
import { StringMapService } from '../service/string-map.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-string-map-save',
  templateUrl: './string-map-save.component.html',
  styleUrls: ['./string-map-save.component.css']
})
export class StringMapSaveComponent implements OnInit {

  stringMap: any[]=[];

  constructor(private stringMapService: StringMapService) { }

  ngOnInit() {
  }

  StringMapData(stringMap)
  {
    console.log(stringMap)
    this.stringMapService.stringMapDataSave(stringMap).subscribe(resp =>{
      console.log(resp)
    })
  }

}
