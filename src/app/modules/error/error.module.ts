import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ErrorRoutingModule } from "./error-routing.module";
import { ErrorComponent } from "./containers/error/error.component";
import { ErrorNotfoundComponent } from "./components/error-notfound/error-notfound.component";
import { ErrorServerComponent } from "./components/error-server/error-server.component";
import { ErrorUnauthorizedComponent } from "./components/error-unauthorized/error-unauthorized.component";
import { ErrorUnexpectedComponent } from "./components/error-unexpected/error-unexpected.component";

@NgModule({
  declarations: [ErrorComponent, ErrorNotfoundComponent, ErrorServerComponent, ErrorUnauthorizedComponent, ErrorUnexpectedComponent],
  imports: [CommonModule, ErrorRoutingModule, SharedModule],
})
export class ErrorModule {}
