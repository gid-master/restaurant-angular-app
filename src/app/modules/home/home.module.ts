import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./containers/home/home.component";
import { SharedModule } from "../shared/shared.module";
import { HomeCopyRightsComponent } from "./components/home-copy-rights/home-copy-rights.component";
import { HomeIntroComponent } from "./components/home-intro/home-intro.component";
import { HomeShortcutComponent } from "./components/home-shortcut/home-shortcut.component";
import { HomeShortcutButtonComponent } from "./components/home-shortcut-button/home-shortcut-button.component";

@NgModule({
  declarations: [HomeComponent, HomeCopyRightsComponent, HomeIntroComponent, HomeShortcutComponent, HomeShortcutButtonComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
