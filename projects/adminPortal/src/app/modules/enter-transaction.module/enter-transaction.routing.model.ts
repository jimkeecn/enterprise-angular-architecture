import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductSelectionComponent } from "./enter-transaction/product-selection/product-selection.component";
import { InvestorDetailComponent } from "./enter-transaction/investor-detail/investor-detail.component";
import { TransactionGeneralResolver } from "./enter-transaction/resolvers/transaction-general-resolver.service";
import { InvestorCompanyComponent } from "./enter-transaction/investor-company/investor-company.component";
import { InvestorJointComponent } from "./enter-transaction/investor-joint/investor-joint.component";
import { InvestorTrustComponent } from "./enter-transaction/investor-trust/investor-trust.component";
import { BankingDetailComponent } from "./enter-transaction/banking-detail/banking-detail.component";
import { CommissionSetupComponent } from "./enter-transaction/commission-setup/commission-setup.component";
import { EnterTransactionComponent } from "./enter-transaction/enter-transaction.component";

const routes: Routes = [
  {
    path: "",
    component: EnterTransactionComponent,
    children: [
      {
        path: "product-selection",
        component: ProductSelectionComponent
      },
      {
        path: "investor-individual/:id/:new",
        component: InvestorDetailComponent,
        resolve: { data: TransactionGeneralResolver }
      },
      {
        path: "investor-company/:id/:new",
        component: InvestorCompanyComponent,
        resolve: { data: TransactionGeneralResolver }
      },
      {
        path: "investor-joint/:id/:new",
        component: InvestorJointComponent,
        resolve: { data: TransactionGeneralResolver }
      },
      {
        path: "investor-trust/:id/:new",
        component: InvestorTrustComponent,
        resolve: { data: TransactionGeneralResolver }
      },
      {
        path: "banking-detail/:id/:new",
        component: BankingDetailComponent,
        resolve: { data: TransactionGeneralResolver }
      },
      {
        path: "commission-setup/:id/:new",
        component: CommissionSetupComponent,
        resolve: { data: TransactionGeneralResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterTransactionRoutingModule {}
