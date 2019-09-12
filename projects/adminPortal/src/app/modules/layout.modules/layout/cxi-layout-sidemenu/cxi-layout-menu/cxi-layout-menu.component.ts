import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { Router } from "@angular/router";

const CXI_MENU = [
  {
    name: "Dashboard",
    icon: ["fas", "fa-home"],
    path: "app/dashboard",
    chidren: []
  },
  {
    name: "enquiries",
    icon: ["fas", "fa-search"],
    openMenu: false,
    chidren: [
      {
        name: "investor Enquiry",
        subIcon: "ie",
        path: ""
      },
      {
        name: "account Enquiry",
        subIcon: "ae",
        path: ""
      },
      {
        name: "transaction Enquiry",
        subIcon: "te",
        path: ""
      }
    ]
  },
  {
    name: "Investor Transaction",
    icon: ["fas", "fa-file-signature"],
    openMenu: false,
    chidren: [
      {
        name: "Enter Transaction",
        subIcon: "et",
        path: "app/enter-transaction/product-selection"
      },
      {
        name: "Maintain Transaction",
        subIcon: "mt",
        path: ""
      },
      {
        name: "Transfers",
        subIcon: "Tf",
        path: ""
      }
    ]
  },
  {
    name: "Reports",
    icon: ["fas", "fa-file-pdf"],
    openMenu: false,
    chidren: [
      {
        name: "Transaction Statement",
        subIcon: "ts",
        path: ""
      },
      {
        name: "Income Statement",
        subIcon: "is",
        path: ""
      },
      {
        name: "Holding Statement",
        subIcon: "hs",
        path: ""
      },
      {
        name: "Annual Tax Statement",
        subIcon: "ats",
        path: ""
      }
    ]
  }
];

@Component({
  selector: "app-cxi-layout-menu",
  templateUrl: "./cxi-layout-menu.component.html",
  styleUrls: ["./cxi-layout-menu.component.scss"],
  animations: [
    trigger("toggleHeight", [
      transition(":enter", [
        style({ height: 0, display: "block", overflow: "hidden" }),
        animate(
          "200ms",
          style({ height: "*", display: "block", overflow: "hidden" })
        )
      ]),
      transition(":leave", [
        style({ height: "*", display: "block", overflow: "hidden" }),
        animate(
          "200ms",
          style({ height: 0, display: "none", overflow: "hidden" })
        )
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class CxiLayoutMenuComponent implements OnInit {
  openMenu: boolean = false;
  cxiMenu = CXI_MENU;
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(path: string) {
    if (path) {
      this.router.navigate([path]);
    } else {
      return;
    }
  }
}
