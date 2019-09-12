import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { EnterTransactionDataService } from "./../../enter-transaction.data.service";
import { SubSink } from "subsink";
import { MatDialog } from "@angular/material";
import { CxiIndividualFormModalComponent } from "../../../cxi-form.modules/cxi-individual-form-modal/cxi-individual-form-modal.component";

/* FAKE DATA */
const BENEFICIAL_OWNER_DATA = [
  {
    firstName: "Junxi",
    lastName: "Li",
    fullAddress: "U1123 55 Merchant Street Docklands VIC 3008",
    isVerified: false,
    dob: new Date()
  },
  {
    firstName: "Yuqi",
    lastName: "Wei",
    fullAddress: "U1123 55 Merchant Street Docklands VIC 3008 ",
    isVerified: true,
    dob: new Date()
  }
];

/* FAKE DATA END */

@Component({
  selector: "app-investor-detail",
  templateUrl: "./investor-detail.component.html",
  styleUrls: ["./investor-detail.component.scss"]
})
export class InvestorDetailComponent implements OnInit, OnDestroy {
  transactionInfo: Object;
  columnsToDisplay = [
    "firstName",
    "lastName",
    "dob",
    "fullAddress",
    "isVerified",
    "action"
  ];
  dataSource = BENEFICIAL_OWNER_DATA;
  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private etDataService: EnterTransactionDataService,
    public dialog: MatDialog
  ) {}
  private subsink = new SubSink();

  /* Angular Life Cycle Block */
  ngOnInit() {
    this.transactionInfo = this.activeRoute.snapshot.data.data.info;
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
  /* Angular Life Cycle Block */

  openDialog(): void {
    const dialogRef = this.dialog.open(CxiIndividualFormModalComponent, {
      width: "80vw",
      data: null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  navigateToBankingDetail(): void {
    this.route.navigate([
      "/app/enter-transaction/banking-detail",
      "T300012",
      true
    ]);
  }
}
