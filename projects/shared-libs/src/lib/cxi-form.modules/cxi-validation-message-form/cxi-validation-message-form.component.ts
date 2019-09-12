import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-cxi-validation-message-form",
  templateUrl: "./cxi-validation-message-form.component.html",
  styleUrls: ["./cxi-validation-message-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class CxiValidationMessageFormComponent implements OnInit {
  @Input() messageObject: Object;
  @Input() messageFormGroup: FormGroup;
  objectKeys = Object.keys;
  constructor() {}

  ngOnInit() {}
}
