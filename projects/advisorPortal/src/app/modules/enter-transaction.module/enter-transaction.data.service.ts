import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EnterTransactionDataService {
  constructor() {}

  transactions = [
    {
      accountNumber: "A1451101",
      transactionNumber: "T300012",
      accountType: "Individual",
      issuer: "Cxiregistry International Fund : RE",
      product: "Cxiregistry International Fund",
      receivedDate: new Date()
    },
    {
      accountNumber: "A1451102",
      transactionNumber: "T300013",
      accountType: "Company",
      issuer: "Cxiregistry International Fund : RE",
      product: "Cxiregistry International Fund",
      receivedDate: new Date()
    },
    {
      accountNumber: "A1451103",
      transactionNumber: "T300014",
      accountType: "Joint",
      issuer: "Cxiregistry International Fund : RE",
      product: "Cxiregistry International Fund",
      receivedDate: new Date()
    },
    {
      accountNumber: "A1451104",
      transactionNumber: "T300015",
      accountType: "Trust",
      issuer: "Cxiregistry International Fund : RE",
      product: "Cxiregistry International Fund",
      receivedDate: new Date()
    }
  ];

  getTransactionBasicInfo(transactionNumber: string) {
    const result = this.transactions.find(
      res => res.transactionNumber === transactionNumber
    );
    return result;
  }
}
