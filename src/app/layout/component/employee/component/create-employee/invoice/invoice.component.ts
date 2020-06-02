import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PrintService} from '../../../services/print.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoiceIds: string[];
  invoiceDetails: Promise<any>[];

  id

  constructor(private route: ActivatedRoute,
              private router: Router,
              private printService: PrintService) {

                console.log(this.printService.printData)

                this.id = this.route.snapshot.paramMap.get('id');
                // console.log(this.id)

  }

  ngOnInit() {
    // this.printService.onDataReady()

    setTimeout(() => {
      
      window.print();
      this.router.navigate(['/dashboard/employee/details']);

    });

   
  }

}
