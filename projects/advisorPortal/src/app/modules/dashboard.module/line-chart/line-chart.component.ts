import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"]
})
export class LineChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [6.5, 5.9, 8.0, 8.1, 5.6, 5.5, 4.0], label: "Cxi Fund A" },
    { data: [2.8, 4.8, 4.0, 1.9, 8.6, 2.7, 9.0], label: "Cxi Fund B" }
  ];
  public lineChartLabels: Label[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    annotation: {
      annotations: [
        {
          type: "line",
          mode: "vertical",
          scaleID: "x-axis-0",
          value: "March",
          borderColor: "orange",
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: "orange",
            content: "LineAnno"
          }
        }
      ]
    }
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: "rgba(0,188,212 ,0.5)",
      borderColor: "rgba(0,188,212 ,1)",
      pointBackgroundColor: "rgba(0,188,212 ,1)",
      pointBorderColor: "rgba(0,188,212 ,1)",
      pointHoverBackgroundColor: "rgba(0,188,212 ,1)",
      pointHoverBorderColor: "rgba(0,188,212 ,1)"
    },
    {
      backgroundColor: "rgba(0, 148, 222,0.5)",
      borderColor: "#0094de",
      pointBackgroundColor: "#0094de",
      pointBorderColor: "#0094de",
      pointHoverBackgroundColor: "#0094de",
      pointHoverBorderColor: "#0094de"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  constructor() {}

  ngOnInit() {}
}
