import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lenderSearch'
})
export class LenderSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
       let rVal =
                // (val.Amount.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                (val.Payment.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                //  (val.ReceiverObjectTypeCode.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 (val.Receiver.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                //  (val.PaymentRefNo.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||

                //  (val.LenderObjectTypeCode.toLocaleLowerCase().includes(args)) ||
                 (val.Lender.toLocaleLowerCase().includes(args)) ||
                //  (val.YearlyInterestPer.toLocaleLowerCase().includes(args)) ||
                //  (val.IsPartnerFunding.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||
                 (val.Tenure.toLocaleLowerCase().includes(args.toLocaleLowerCase())) ||

                //  (val.InPaymentTerms.toLocaleLowerCase().includes(args.toLocaleLowerCase()))
                 (val.StartDate.toLocaleLowerCase().includes(args.toLocaleLowerCase()))
                 (val.EndDate.toLocaleLowerCase().includes(args.toLocaleLowerCase()))
                //  (val.OnlyPayInterest.toLocaleLowerCase().includes(args.toLocaleLowerCase()))
                 (val.RepaymentAmount.toLocaleLowerCase().includes(args.toLocaleLowerCase()))
                 (val. CurrentOutStanding.toLocaleLowerCase().includes(args.toLocaleLowerCase()))
                 (val.OutStandingLastUpdatedOn.toLocaleLowerCase().includes(args.toLocaleLowerCase()));




      return rVal;
    })

  }

}
