import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cxi-super-trust-form",
  templateUrl: "./cxi-super-trust-form.component.html",
  styleUrls: ["./cxi-super-trust-form.component.scss"]
})
export class CxiSuperTrustFormComponent implements OnInit {
  listOfTax = [];
  removeSwtich: boolean = false;
  listOfAR = [];
  removeARSwtich: boolean = false;
  constructor() {}

  ngOnInit() {}

  /* handling the output from the cxi-list-handler component */
  taxForeignListHandler(list) {
    console.log(list);
  }

  /* handling the output from the cxi-list-handler component */
  alterRefListHandler(list) {
    console.log(list);
  }
}
