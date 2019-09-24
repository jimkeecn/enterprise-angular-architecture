import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { IIndividualEntity } from "../cxi-interfaces/IIndividualEntity";
import {
  IValidationOuterMessage,
  mapValidationMessage
} from "../cxi-interfaces/IValidationMessage";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-cxi-individual-form",
  templateUrl: "./cxi-individual-form.component.html",
  styleUrls: ["./cxi-individual-form.component.scss"]
})
export class CxiIndividualFormComponent implements OnInit {
  /**
   *
   * A Standard Angular Output Decorator.
   * Emit a FormGroup to parent component for validate trigger purpose.
   *
   * @remarks
   * This method is an UI extension of cxi business logic component <cxi-individual-form-bsrc>
   *
   * @returns $event : FormGroup
   *
   */

  @Output() formGroupEmit? = new EventEmitter<FormGroup>();

  /**
   * A Standard Angular Output Decorator.
   * Emit a ValidationMessage to parent component for validation purpose.
   *
   * @remarks
   * This method is an UI extension of cxi business logic component <cxi-individual-form-bsrc>
   *
   * @returns $event : IValidationOuterMessage
   *
   */

  @Output() validationMessageEmit? = new EventEmitter<
    IValidationOuterMessage
  >();

  listOfTax = [];
  removeSwtich: boolean = false;
  listOfAR = [];
  removeARSwtich: boolean = false;

  constructor() {}

  ngOnInit() {}

  handleValidationEmitter(validationMsg: IValidationOuterMessage) {
    this.validationMessageEmit.emit(validationMsg);
  }

  handleFormGroupEmitter(individualFormGroup: FormGroup) {
    this.formGroupEmit.emit(individualFormGroup);
  }

  /* handling the output from the cxi-list-handler component */
  taxForeignListHandler(list) {
    console.log(list);
  }

  /* handling the output from the cxi-list-handler component */
  alterRefListHandler(list) {
    console.log(list);
  }
}
