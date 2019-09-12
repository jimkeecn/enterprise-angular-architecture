import { Component, OnInit } from "@angular/core";
import { trigger, style, transition, animate } from "@angular/animations";

@Component({
  selector: "app-cxi-layout-sidemenu",
  templateUrl: "./cxi-layout-sidemenu.component.html",
  styleUrls: ["./cxi-layout-sidemenu.component.scss"],
  animations: [
    trigger("ngIfMinifiedMenu", [
      transition(":enter", [
        style({ top: "-1000px" }),
        animate("300ms", style({ top: "100px" }))
      ]),
      transition(":leave", [
        style({ top: "100px" }),
        animate("300ms", style({ top: "-1000px" }))
      ])
    ])
  ]
})
export class CxiLayoutSidemenuComponent implements OnInit {
  minifiedMenuVisible: boolean = false;
  constructor() {}

  ngOnInit() {}
}
