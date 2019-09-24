import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { EnterTransactionDataService } from "./../../enter-transaction.data.service";
import { SubSink } from "subsink";
import { MatDialog } from "@angular/material";
import { CxiIndividualFormModalComponent } from "shared-libs";
import {
  IIndividualEntity,
  IValidationOuterMessage
} from "shared-libs/public-api";
import { FormGroup } from "@angular/forms";

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

  primaryInvestorDetail: IIndividualEntity;
  primaryInvestorDetailValidation: IValidationOuterMessage;
  primaryInvestorDetailValidationTurnOn: boolean = false;
  primaryInvestorDetailFormGroup: FormGroup;

  /* Customize the validation Message for it's need */
  validationMessageOptions: IValidationOuterMessage = null;

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

  handleValidationEmitter(validationMsg: IValidationOuterMessage) {
    this.primaryInvestorDetailValidation = validationMsg;
    console.log(this.primaryInvestorDetailValidation);
  }

  handleFormGroupEmitter(individualFormGroup: FormGroup) {
    this.primaryInvestorDetailFormGroup = individualFormGroup;
    console.log(this.primaryInvestorDetailFormGroup);
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
    this.primaryInvestorDetailFormGroup.markAllAsTouched();
    this.primaryInvestorDetailValidationTurnOn = true;
    if (this.primaryInvestorDetailFormGroup.valid) {
      this.route.navigate([
        "/app/enter-transaction/banking-detail",
        "T300012",
        true
      ]);
    } else {
      return;
    }
  }
}
