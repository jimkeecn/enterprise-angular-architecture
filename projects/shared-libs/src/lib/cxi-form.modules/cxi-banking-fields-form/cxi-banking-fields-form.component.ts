import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cxi-banking-fields-form",
  templateUrl: "./cxi-banking-fields-form.component.html",
  styleUrls: ["./cxi-banking-fields-form.component.scss"]
})
export class CxiBankingFieldsFormComponent implements OnInit {
  @Input() bankType: string = "incoming" || "outgoing";

  constructor() {}

  ngOnInit() {
    console.log(this.bankType);
  }
}
