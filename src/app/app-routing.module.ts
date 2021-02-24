import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoginGuard } from "./guards/login.guard";

const routes: Routes = [
  { path: "", loadChildren: () => import("./modules/home/home.module").then((m) => m.HomeModule), data: { toolbarId: "home", showToolbar: true } },

  { path: "home", redirectTo: "/", pathMatch: "full" },

  { path: "menu", loadChildren: () => import("./modules/menu/menu.module").then((m) => m.MenuModule), data: { toolbarId: "menu", showToolbar: true } },

  { path: "product", loadChildren: () => import("./modules/product/product.module").then((m) => m.ProductModule), data: { showToolbar: false } },

  {
    path: "checkout",
    loadChildren: () => import("./modules/checkout/checkout.module").then((m) => m.CheckoutModule),
    data: { toolbarId: "checkout", showToolbar: true },
  },

  {
    path: "account",
    loadChildren: () => import("./modules/account/account.module").then((m) => m.AccountModule),
    data: { toolbarId: "account", showToolbar: true },
    canActivate: [AuthGuard],
  },

  {
    path: "login",
    loadChildren: () => import("./modules/login/login.module").then((m) => m.LoginModule),
    data: { toolbarId: "account", showToolbar: true },
    canActivate: [LoginGuard],
  },

  // Error page
  { path: "error", loadChildren: () => import("./modules/error/error.module").then((m) => m.ErrorModule) },

  // Fallback routes
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "**", redirectTo: "error/404", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
