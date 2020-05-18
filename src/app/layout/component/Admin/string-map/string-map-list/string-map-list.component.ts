import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { StringMapService } from '../service/string-map.service';
import { StringMapList } from '../model/stringMapList.module';
import { AppResponse } from 'src/app/models/appResponse';


@Component({
  selector: 'app-string-map-list',
  templateUrl: './string-map-list.component.html',
  styleUrls: ['./string-map-list.component.css']
})
export class StringMapListComponent implements OnInit {

  stringMapList: StringMapList[]=[];
  status=false;
  message="";

  constructor(private dialog: MatDialog,
              private stringmapService: StringMapService
              
      ){

        this.stringmapService.stringMapGetList(2).subscribe(resp =>{
          console.log(resp)
          if(resp.Success)
          {
            this.stringMapList = resp.Data
            console.log(this.stringMapList)
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
           else
           {
              this.status=true;
              this.message = error.message;
           }
    })






  }

  ngOnInit() {
  }
  AddOrEditOrderItem()
  { const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={}
    this.dialog.open(PopupComponent, dialogConfig).afterClosed().subscribe(res =>{
      
    });
  }
}
