import { Component, OnInit } from "@angular/core";
import { trigger, animate, style, transition } from "@angular/animations";

@Component({
  selector: "app-cxi-layout-header",
  templateUrl: "./cxi-layout-header.component.html",
  styleUrls: ["./cxi-layout-header.component.scss"],
  animations: [
    trigger("ngIfFadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("200ms", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("200ms", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CxiLayoutHeaderComponent implements OnInit {
  profileVisible: boolean = false;
  constructor() {}

  ngOnInit() {}
}
