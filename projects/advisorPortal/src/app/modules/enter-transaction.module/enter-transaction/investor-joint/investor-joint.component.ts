import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { EnterTransactionDataService } from "../../enter-transaction.data.service";
import { MatDialog } from "@angular/material";
import { CxiIndividualFormModalComponent } from "../../../cxi-form.modules/cxi-individual-form-modal/cxi-individual-form-modal.component";
import { CxiCompanyFormModalComponent } from "../../../cxi-form.modules/cxi-company-form-modal/cxi-company-form-modal.component";

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

const COMPANY_DATA = [
  {
    companyName: "Unime international pty ltd",
    companyAddress: "350 Collins Street Melbourne VIC 3000",
    ABN: "98001122",
    isVerified: true,
    directors: [
      {
        firstName: "Junxi",
        lastName: "Li",
        isVerified: true
      }
    ],
    beneficialOwners: [
      {
        firstName: "Yuqi",
        lastName: "Wei",
        isVerified: true
      }
    ]
  },
  {
    companyName: "2pac international pty ltd",
    companyAddress: "150 Collins Street Melbourne VIC 3000",
    ABN: "464646887",
    isVerified: true,
    directors: [
      {
        firstName: "Fred",
        lastName: "Wu",
        isVerified: true
      }
    ],
    beneficialOwners: [
      {
        firstName: "XiaoLong",
        lastName: "Feng",
        isVerified: true
      }
    ]
  }
];
/* FAKE DATA END */

@Component({
  selector: "app-investor-joint",
  templateUrl: "./investor-joint.component.html",
  styleUrls: ["./investor-joint.component.scss"]
})
export class InvestorJointComponent implements OnInit {
  transactionInfo: Object;
  columnsToDisplay = [
    "firstName",
    "lastName",
    "dob",
    "fullAddress",
    "isVerified",
    "action"
  ];

  companyColumnsToDisplay = [
    "companyName",
    "companyAddress",
    "ABN",
    "isVerified",
    "action"
  ];

  dataSource = BENEFICIAL_OWNER_DATA;
  companyDataSource = COMPANY_DATA;
  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private etDataService: EnterTransactionDataService,
    public dialog: MatDialog
  ) {}

  /* Angular Life Cycle Block */
  ngOnInit() {
    this.transactionInfo = this.activeRoute.snapshot.data.data.info;
  }

  ngOnDestroy(): void {}
  /* Angular Life Cycle Block */

  openIndividualDialog(): void {
    const dialogRef = this.dialog.open(CxiIndividualFormModalComponent, {
      width: "80vw",
      data: null,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  openCompanyDialog(): void {
    const dialogRef = this.dialog.open(CxiCompanyFormModalComponent, {
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
