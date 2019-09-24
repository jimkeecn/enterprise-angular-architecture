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
  @Input() data: any;

  /* Overwrite or extending the existing validation rules */
  @Input()
  validationMessage?: IValidationOuterMessage = null;
  set setValidationMessage(validationMessage: IValidationOuterMessage) {
    this.individualFormGroupValidationMessage = mapValidationMessage(
      validationMessage,
      this.individualFormGroupValidationMessage
    );
    this.validationMessageEmit.emit(this.individualFormGroupValidationMessage);
  }
  /* Add Controls into FormGroup
     Cautious !!!!
     Please make sure the validation message are paired with new Control with validation.
  */
  @Input()
  moreControls?: FormControl[] = null;
  set addControls(moreControls: FormControl[]) {
    if (moreControls && moreControls.length > 0) {
      moreControls.forEach(ctr => {
        this.individualFormGroup.addControl(ctr.value, new FormControl());
      });
    }
  }

  /* Remove Controls into FormGroup */
  @Input()
  lessControls?: FormControl[] = null;
  set removedControls(moreControls: FormControl[]) {
    if (moreControls && moreControls.length > 0) {
      moreControls.forEach(ctr => {
        this.individualFormGroup.removeControl(ctr.value);
      });
    }
  }

  @Output() formGroupEmit? = new EventEmitter<FormGroup>();

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
    firstName: [{ type: "required", message: "First Name is required." }],
    lastName: [{ type: "required", message: "First Name is required." }],
    dob: [{ type: "required", message: "First Name is required." }],
    fullAddress: [{ type: "required", message: "First Name is required." }]
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validationMessageEmit.emit(this.individualFormGroupValidationMessage);
    this.formGroupEmit.emit(this.individualFormGroup);
  }

  ngOnDestroy() {}

  ngAfterViewInit() {}
}
