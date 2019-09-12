import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnterTransactionRoutingModule } from "./enter-transaction.routing.model";

import { SharedModule } from "./../share.modules/shared.module";
import { EtBasicInfoBarComponent } from "./enter-transaction/shared/et-basic-info-bar/et-basic-info-bar.component";
import { CxiFormModule } from "../cxi-form.modules/cxi-form.module";
import { InvestorCompanyComponent } from "./enter-transaction/investor-company/investor-company.component";
import { InvestorJointComponent } from "./enter-transaction/investor-joint/investor-joint.component";
import { InvestorTrustComponent } from "./enter-transaction/investor-trust/investor-trust.component";
import { BankingDetailComponent } from "./enter-transaction/banking-detail/banking-detail.component";
import { CommissionSetupComponent } from "./enter-transaction/commission-setup/commission-setup.component";
import { EnterTransactionComponent } from "./enter-transaction/enter-transaction.component";
import { ProductSelectionComponent } from "./enter-transaction/product-selection/product-selection.component";
import { InvestorDetailComponent } from "./enter-transaction/investor-detail/investor-detail.component";
@NgModule({
  declarations: [
    EnterTransactionComponent,
    ProductSelectionComponent,
    InvestorDetailComponent,
    EtBasicInfoBarComponent,
    InvestorCompanyComponent,
    InvestorJointComponent,
    InvestorTrustComponent,
    BankingDetailComponent,
    CommissionSetupComponent
  ],
  imports: [
    CommonModule,
    EnterTransactionRoutingModule,
    SharedModule,
    CxiFormModule
  ]
})
export class EnterTransactionModule {}
