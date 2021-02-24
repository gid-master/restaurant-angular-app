import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MenuRoutingModule } from "./menu-routing.module";
import { MenuComponent } from "./containers/menu/menu.component";
import { MenuEmptyComponent } from "./components/menu-empty/menu-empty.component";
import { MenuFilterComponent } from "./components/menu-filter/menu-filter.component";
import { MenuSearchComponent } from "./components/menu-search/menu-search.component";
import { MenuSortComponent } from "./components/menu-sort/menu-sort.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [MenuComponent, MenuEmptyComponent, MenuFilterComponent, MenuSearchComponent, MenuSortComponent],
  imports: [CommonModule, MenuRoutingModule, SharedModule],
})
export class MenuModule {}
