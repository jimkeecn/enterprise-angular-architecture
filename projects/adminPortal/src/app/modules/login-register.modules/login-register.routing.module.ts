import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CxiLoginComponent } from "./cxi-login/cxi-login.component";
const routes: Routes = [
  {
    path: "",
    component: CxiLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterRoutingModule {}
