import { Component, OnInit } from "@angular/core";
import { CxiIndividualFormModalComponent } from "../cxi-individual-form-modal/cxi-individual-form-modal.component";
import { MatDialog, MatDialogRef } from "@angular/material";
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
  selector: "app-cxi-company-form-modal",
  templateUrl: "./cxi-company-form-modal.component.html"
})
export class CxiCompanyFormModalComponent implements OnInit {
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
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CxiCompanyFormModalComponent>
  ) {}

  ngOnInit() {}

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
  closeModal(): void {
    this.dialogRef.close();
  }
}
