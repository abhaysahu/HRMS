import { Component, OnInit } from '@angular/core';
import { StringMapService } from '../service/string-map.service';
import { combineLatest } from 'rxjs';
import { AppResponse } from 'src/app/models/appResponse';

@Component({
  selector: 'app-string-map-save',
  templateUrl: './string-map-save.component.html',
  styleUrls: ['./string-map-save.component.css']
})
export class StringMapSaveComponent implements OnInit {

  stringMap: any[]=[];

  status=false;
  message="";

  constructor(private stringMapService: StringMapService) { }

  ngOnInit() {
  }

  StringMapData(stringMap)
  {

    this.stringMapService.stringMapDataSave(stringMap).subscribe(resp =>{
      console.log(resp)
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
    }
  )
}

  closeStatus()
  {
    this.status=false;
  }

}
