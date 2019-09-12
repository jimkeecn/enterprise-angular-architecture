import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "app-et-basic-info-bar",
  templateUrl: "./et-basic-info-bar.component.html",
  styleUrls: ["./et-basic-info-bar.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class EtBasicInfoBarComponent implements OnInit {
  @Input() basicInfo;

  constructor() {}

  ngOnInit() {}
}
