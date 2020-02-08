import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CxiDashboardComponent } from "./cxi-dashboard/cxi-dashboard.component";
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { SharedModule } from "projects/shared-libs/src/lib/share.modules/shared.module";

@NgModule({
  declarations: [CxiDashboardComponent, LineChartComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
