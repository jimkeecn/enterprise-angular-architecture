import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout/layout.component";
import { CxiLayoutContentComponent } from "./layout/cxi-layout-content/cxi-layout-content.component";
import { CxiLayoutHeaderComponent } from "./layout/cxi-layout-header/cxi-layout-header.component";
import { CxiLayoutSidemenuComponent } from "./layout/cxi-layout-sidemenu/cxi-layout-sidemenu.component";
import { LayoutModuleRoutingModule } from "./layout.routing.module";
import { CxiFormModule } from "../cxi-form.modules/cxi-form.module";
import { CxiLayoutMenuComponent } from "./layout/cxi-layout-sidemenu/cxi-layout-menu/cxi-layout-menu.component";

@NgModule({
  declarations: [
    LayoutComponent,
    CxiLayoutContentComponent,
    CxiLayoutHeaderComponent,
    CxiLayoutSidemenuComponent,
    CxiLayoutMenuComponent
  ],
  imports: [CommonModule, LayoutModuleRoutingModule, CxiFormModule]
})
export class LayoutModule {}
