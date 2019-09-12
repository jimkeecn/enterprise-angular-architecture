import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "enter-transaction",
        loadChildren:
          "./../enter-transaction.module/enter-transaction.module#EnterTransactionModule"
      },
      {
        path: "dashboard",
        loadChildren: "../dashboard.module/dashboard.module#DashboardModule"
      }
    ]
  },
  { path: "**", redirectTo: "app" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutModuleRoutingModule {}
