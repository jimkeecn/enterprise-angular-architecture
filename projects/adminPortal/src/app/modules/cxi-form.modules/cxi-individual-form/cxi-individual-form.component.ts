import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cxi-individual-form",
  templateUrl: "./cxi-individual-form.component.html",
  styleUrls: ["./cxi-individual-form.component.scss"]
})
export class CxiIndividualFormComponent implements OnInit {
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
