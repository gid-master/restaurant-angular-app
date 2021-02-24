import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { DirectivesModule } from "src/app/directives/directives.module";

import { LoginService } from "./services/login.service";

// components
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./containers/login/login.component";
import { LoginAuthenticateComponent } from "./components/login-authenticate/login-authenticate.component";
import { LoginCreateAccountComponent } from "./components/login-create-account/login-create-account.component";

// NGRX
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { LOGIN_FEATURE_KEY } from "./state/login.state";
import { loginReducer } from "./state/login.reducer";
import { LoginEffects } from "./state/login.effects";

@NgModule({
  declarations: [LoginComponent, LoginAuthenticateComponent, LoginCreateAccountComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DirectivesModule,
    // NGRX
    StoreModule.forFeature(LOGIN_FEATURE_KEY, loginReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  providers: [LoginService],
})
export class LoginModule {}
