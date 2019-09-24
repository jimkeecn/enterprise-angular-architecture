import {
  Component,
  OnInit,
  Input,
  Output,
  OnDestroy,
  AfterViewInit,
  EventEmitter
} from "@angular/core";

import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";
import {
  IValidationOuterMessage,
  mapValidationMessage
} from "../cxi-interfaces/IValidationMessage";

@Component({
  selector: "lib-cxi-individual-form-bsrc",
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class CxiIndividualFormBsrcComponent
  implements OnInit, OnDestroy, AfterViewInit {
  /**
   * A Standard Angular Input Decorator.
   * Replace or remove default validation message <individualFormGroupValidationMessage> or Adding more type into validation message.
   *
   * e.g.
   * replace the firstName Message and add one more error type message with the below message.
   * ```ts
   * this.validationMessageOptions = {
   *   firstName: [
   *     {
   *       type: "required",
   *       message: "First Name is Required for Advisor Portal!!"
   *     },
   *    {
   *       type: "alphabetOnly",
   *       message: "First Name Only Allow English Letters."
   *     }
   *   ]
   * };
   * ```
   *
   * @param   validationMessage - IValidationOuterMessage
   * @returns $event - IValidationOuterMessage
   *
   */
  @Input()
  set setValidationMessage(validationMessage: IValidationOuterMessage) {
    this.individualFormGroupValidationMessage = mapValidationMessage(
      validationMessage,
      this.individualFormGroupValidationMessage
    );
    this.validationMessageEmit.emit(this.individualFormGroupValidationMessage);
  }

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

  public individualFormGroup = this.fb.group({
    title: [""],
    titleId: [""],
    firstName: ["", Validators.required],
    middleName: ["", Validators.required],
    lastName: ["", Validators.required],
    dob: ["", Validators.required],
    fullAddress: ["", Validators.required],
    isPEP: [false],
    sof: [""],
    pepDetail: [""],
    email: [""],
    mobileNo: [""],
    receiveCommunication: [""],
    tfn: [""]
  });

  public individualFormGroupValidationMessage: IValidationOuterMessage = {
    firstName: [
      { type: "required", message: "First Name is required (library)." }
    ],
    lastName: [
      { type: "required", message: "Last Name is required (library)." }
    ],
    dob: [
      { type: "required", message: "Date of Birth is required (library)." }
    ],
    fullAddress: [
      { type: "required", message: "Address is required (library)." }
    ]
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validationMessageEmit.emit(this.individualFormGroupValidationMessage);
    this.formGroupEmit.emit(this.individualFormGroup);
  }

  ngOnDestroy() {}

  ngAfterViewInit() {}
}
