import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-cxi-individual-form-modal",
  templateUrl: "./cxi-individual-form-modal.component.html"
})
export class CxiIndividualFormModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CxiIndividualFormModalComponent>
  ) {}

  ngOnInit() {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
