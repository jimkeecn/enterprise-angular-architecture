import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
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
  selector: "app-investor-company",
  templateUrl: "./investor-company.component.html",
  styleUrls: ["./investor-company.component.scss"]
})
export class InvestorCompanyComponent implements OnInit {
  transactionInfo: Object;
  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  columnsToDisplay = [
    "firstName",
    "lastName",
    "dob",
    "fullAddress",
    "isVerified",
    "action"
  ];
  dataSource = BENEFICIAL_OWNER_DATA;
  ngOnInit() {
    this.transactionInfo = this.activeRoute.snapshot.data.data.info;
  }

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
