import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { SubSink } from "subsink";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-selection",
  templateUrl: "./product-selection.component.html",
  styleUrls: ["./product-selection.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ProductSelectionComponent
  implements OnInit, AfterViewInit, OnDestroy {
  private subs = new SubSink();
  formReady: boolean = false;
  productSelectionFormGroupValidationMsg: boolean = false;
  productSelectionFormGroup = this.fb.group({
    product: ["", Validators.required],
    issuer: ["", Validators.required],
    receivedDate: ["", Validators.required],
    isNewAccount: [""],
    accountType: ["", Validators.required],
    accountSelected: [""]
  });

  productSelectionFormGroupErrorMessage = {
    product: [{ type: "required", message: "Please select a product." }],
    issuer: [{ type: "required", message: "This product has no issuer." }],
    receivedDate: [
      { type: "required", message: "Please select a received date." },
      {
        type: "matDatepickerParse",
        message:
          "Please fill in a valid date format eg. ddmmyyyy or dd/mm/yyyy."
      }
    ],
    isNewAccount: [],
    accountType: [
      { type: "required", message: "Please select a account type." }
    ],
    accountSelected: [
      { type: "required", message: "Please select an existing account." }
    ]
  };

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.productSelectionFormGroup.patchValue({ isNewAccount: true });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.formReady = true;
      this.productSelectionFormGroup.get("issuer").disable({ onlySelf: true });
    });
  }

  setValidatorChange() {
    const isNewAccount = this.productSelectionFormGroup.get("isNewAccount");
    const accountType = this.productSelectionFormGroup.get("accountType");
    const accountSelected = this.productSelectionFormGroup.get(
      "accountSelected"
    );
    this.subs.add(
      isNewAccount.valueChanges.subscribe(value => {
        if (value == true) {
          accountType.setValidators([Validators.required]);
          accountSelected.clearValidators();
        } else {
          accountSelected.setValidators([Validators.required]);
          accountType.clearValidators();
        }
        accountSelected.updateValueAndValidity();
        accountType.updateValueAndValidity();
      })
    );
  }

  selectProduct(product) {
    let issuer;
    issuer = product + ": RE";
    this.productSelectionFormGroup.patchValue({ issuer: issuer });
  }

  next() {
    if (this.productSelectionFormGroup.valid) {
      console.log("validation passed");
      const routerID = this.productSelectionFormGroup.get("accountType").value;
      if (routerID === "1") {
        this.router.navigate([
          "/app/enter-transaction/investor-individual",
          "T300012",
          true
        ]);
      } else if (routerID === "2") {
        this.router.navigate([
          "/app/enter-transaction/investor-company",
          "T300013",
          true
        ]);
      } else if (routerID === "3") {
        this.router.navigate([
          "/app/enter-transaction/investor-joint",
          "T300014",
          true
        ]);
      } else if (routerID === "4") {
        this.router.navigate([
          "/app/enter-transaction/investor-trust",
          "T300015",
          true
        ]);
      }
    } else {
      this.productSelectionFormGroupValidationMsg = true;
      console.log("validation failed");
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
