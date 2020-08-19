import { Component, OnInit } from '@angular/core';
import { SubdashboardService } from '../../services/subdashboard.service';

@Component({
  selector: 'app-subdashboard',
  templateUrl: './subdashboard.component.html',
  styleUrls: ['./subdashboard.component.css']
})
export class SubdashboardComponent implements OnInit {
  cards = [];
  assets = [];
  liab = [];

  constructor(private subdashboardService: SubdashboardService) { }

  ngOnInit() {
    this.subdashboardService.fetchCards();
    this.subdashboardService.getCards().subscribe(data =>{
      this.cards = [...data];
    })
    this.subdashboardService.fetchAssets();
     this.subdashboardService.getAssets().subscribe(data =>{
      this.assets = [...data];
    })
    this.subdashboardService.fetchLiab();
     this.subdashboardService.getLiab().subscribe(data =>{
      this.liab = [...data];
    })
  }

}
