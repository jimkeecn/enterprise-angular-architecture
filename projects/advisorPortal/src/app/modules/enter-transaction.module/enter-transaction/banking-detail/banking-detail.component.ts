import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-banking-detail",
  templateUrl: "./banking-detail.component.html",
  styleUrls: ["./banking-detail.component.scss"]
})
export class BankingDetailComponent implements OnInit {
  transactionInfo: Object;
  constructor(private route: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.transactionInfo = this.activeRoute.snapshot.data.data.info;
  }

  navigateToCommission() {
    this.route.navigate([
      "/app/enter-transaction/commission-setup",
      "T300012",
      true
    ]);
  }
}
