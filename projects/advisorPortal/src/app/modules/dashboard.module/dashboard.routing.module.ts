import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CxiDashboardComponent } from "./cxi-dashboard/cxi-dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: CxiDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
