import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../share.modules/shared.module";
import { CxiValidationMessageFormComponent } from "./cxi-validation-message-form/cxi-validation-message-form.component";
import { CxiIndividualFormComponent } from "./cxi-individual-form/cxi-individual-form.component";
import { CxiListHandlerComponent } from "./cxi-list-handler/cxi-list-handler.component";
import { CxiIndividualFormModalComponent } from "./cxi-individual-form-modal/cxi-individual-form-modal.component";
import { CxiCompanyFormComponent } from "./cxi-company-form/cxi-company-form.component";
import { CxiCompanyFormModalComponent } from "./cxi-company-form-modal/cxi-company-form-modal.component";
import { CxiSuperTrustFormComponent } from "./cxi-super-trust-form/cxi-super-trust-form.component";
import { CxiBankingFieldsFormComponent } from "./cxi-banking-fields-form/cxi-banking-fields-form.component";
import { CxiGlobalSearchComponent } from "./cxi-global-search/cxi-global-search.component";
import { CxiIndividualFormBsrcComponent } from './cxi-individual-form-bsrc/cxi-individual-form-bsrc.component';

@NgModule({
  declarations: [
    CxiValidationMessageFormComponent,
    CxiIndividualFormComponent,
    CxiListHandlerComponent,
    CxiIndividualFormModalComponent,
    CxiCompanyFormComponent,
    CxiCompanyFormModalComponent,
    CxiSuperTrustFormComponent,
    CxiBankingFieldsFormComponent,
    CxiGlobalSearchComponent,
    CxiIndividualFormBsrcComponent
  ],
  entryComponents: [
    CxiIndividualFormModalComponent,
    CxiCompanyFormModalComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    CxiValidationMessageFormComponent,
    CxiIndividualFormComponent,
    CxiListHandlerComponent,
    CxiIndividualFormModalComponent,
    CxiCompanyFormComponent,
    CxiCompanyFormModalComponent,
    CxiSuperTrustFormComponent,
    CxiBankingFieldsFormComponent,
    CxiGlobalSearchComponent
  ]
})
export class CxiFormModule {}
