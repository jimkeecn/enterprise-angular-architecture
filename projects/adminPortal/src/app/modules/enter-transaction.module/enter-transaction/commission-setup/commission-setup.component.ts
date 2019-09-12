import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { EnterTransactionDataService } from "../../enter-transaction.data.service";

@Component({
  selector: "app-commission-setup",
  templateUrl: "./commission-setup.component.html",
  styleUrls: ["./commission-setup.component.scss"]
})
export class CommissionSetupComponent implements OnInit {
  transactionInfo: Object;
  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private etDataService: EnterTransactionDataService
  ) {}

  ngOnInit() {
    this.transactionInfo = this.activeRoute.snapshot.data.data.info;
  }
}
