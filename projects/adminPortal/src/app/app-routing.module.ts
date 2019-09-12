import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "app/dashboard",
    pathMatch: "full"
  },
  {
    path: "app",
    loadChildren: "./modules/layout.modules/layout.module#LayoutModule"
  },
  {
    path: "login",
    loadChildren:
      "./modules/login-register.modules/login-register.module#LoginRegisterModule"
  },
  { path: "**", redirectTo: "app" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
