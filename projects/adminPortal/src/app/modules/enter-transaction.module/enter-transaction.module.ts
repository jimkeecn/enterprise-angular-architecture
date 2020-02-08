import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnterTransactionRoutingModule } from "./enter-transaction.routing.model";

import { EtBasicInfoBarComponent } from "./enter-transaction/shared/et-basic-info-bar/et-basic-info-bar.component";
import { InvestorCompanyComponent } from "./enter-transaction/investor-company/investor-company.component";
import { InvestorJointComponent } from "./enter-transaction/investor-joint/investor-joint.component";
import { InvestorTrustComponent } from "./enter-transaction/investor-trust/investor-trust.component";
import { BankingDetailComponent } from "./enter-transaction/banking-detail/banking-detail.component";
import { CommissionSetupComponent } from "./enter-transaction/commission-setup/commission-setup.component";
import { EnterTransactionComponent } from "./enter-transaction/enter-transaction.component";
import { ProductSelectionComponent } from "./enter-transaction/product-selection/product-selection.component";
import { InvestorDetailComponent } from "./enter-transaction/investor-detail/investor-detail.component";
import { SharedModule } from "projects/shared-libs/src/lib/share.modules/shared.module";
import { CxiFormModule } from "projects/shared-libs/src/lib/cxi-form.modules/cxi-form.module";
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
