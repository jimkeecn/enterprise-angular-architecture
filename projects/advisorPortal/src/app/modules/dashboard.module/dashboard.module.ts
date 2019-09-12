import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CxiDashboardComponent } from "./cxi-dashboard/cxi-dashboard.component";
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { SharedModule } from "shared-libs";
import { LineChartComponent } from "./line-chart/line-chart.component";

@NgModule({
  declarations: [CxiDashboardComponent, LineChartComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
