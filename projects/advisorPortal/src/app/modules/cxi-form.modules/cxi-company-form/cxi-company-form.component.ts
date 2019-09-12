import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cxi-company-form",
  templateUrl: "./cxi-company-form.component.html",
  styleUrls: ["./cxi-company-form.component.scss"]
})
export class CxiCompanyFormComponent implements OnInit {
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
