import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubdashboardService {
  // tslint:disable-next-line: variable-name
  _cards = [];
  cardsSub;
  // tslint:disable-next-line: variable-name
  _assets=[];
  assetsSub;
  // tslint:disable-next-line: variable-name
  _liab=[];
  liabSub;

  constructor() {
    this.cardsSub = new BehaviorSubject<any[]>(this._cards);
    this.assetsSub = new BehaviorSubject<any[]>(this._assets);
    this.liabSub = new BehaviorSubject<any[]>(this._liab);


   }
// for current income summary
  fetchCards(){
    const items = [
      {
        id: 1,
        name: 'Total Sales',
        cost: '28'
      },
      {
        id: 2,
        name: 'Total Income',
        cost: '28'


      },
      {
        id: 3,
        name: 'Total Expenditure',
        cost: '40'

      },
      {
        id: 4,
        name: 'EBIT',
        cost: '28'
      },
      {
        id: 5,
        name: 'Interest',
        cost: '50'
      },
      {
        id: 6,
        name: 'Tax',
        cost: '28'
      },
      {
        id: 7,
        name: 'Net Profit',
        cost: '28'
      }


    ];



    this._cards = [...items];
    this.cardsSub.next([...this._cards]);

    // this._cards1 = [...items1];
    // this.cards1Sub.next([...this._cards1]);


  }

  // tslint:disable-next-line: align
  getCards(){
    return this.cardsSub.asObservable();
  }
  //ends here



// for assets
   fetchAssets(){
      const items1 = [
        {
          id: 1,
          name: 'Physical Assets',
          cost: '28'
        },
        {
          id: 2,
          name: 'Pobara Inventory',
          cost: '28'


        },
        {
          id: 3,
          name: 'Virtual Asset',
          cost: '40'

        },
        {
          id: 4,
          name: 'Bank Balance',
          cost: '28'
        },
        {
          id: 5,
          name: 'Cash Balance',
          cost: '50'
        },
        {
          id: 6,
          name: 'Total Assets',
          cost: '28'
        },



      ];

    this._assets = [...items1];
    this.assetsSub.next([...this._assets]);
}

  getAssets(){
    return this.assetsSub.asObservable();


}

//ends here

      // tslint:disable-next-line: adjacent-overload-signatures
      fetchLiab(){
        const items2 = [
          {
            id: 1,
            name: 'Loan',
            cost: '28'
          },
          {
            id: 2,
            name: 'Creditor',
            cost: '28'


          },
          {
            id: 3,
            name: 'Total Liabilites',
            cost: '40'

          },


        ];

      this._liab = [...items2];
      this.liabSub.next([...this._liab]);
 }

      getLiab(){
      return this.liabSub.asObservable();


      }

}
