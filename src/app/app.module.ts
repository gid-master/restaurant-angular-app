import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { APP_STATES_REDUCERS_TOKEN } from "./store/app-store.reducers";
import { APP_STATES_EFFECTS } from "./store/app-store.effects";
import { APP_STATES_PROVIDERS } from "./store/app-store.provider";
import { INTERCEPTOR_PROVIDERS } from "./interceptors/interceptors.provider";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CookieModule } from "ngx-cookie";
import { SharedModule } from "./modules/shared/shared.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(APP_STATES_REDUCERS_TOKEN),
    EffectsModule.forRoot(APP_STATES_EFFECTS),
    StoreDevtoolsModule.instrument({ name: "Restaurant NGRX", maxAge: 25 }),
    CookieModule.forRoot(),
    ServiceWorkerModule.register("ngsw-worker.js", { enabled: environment.production }),
  ],
  providers: [INTERCEPTOR_PROVIDERS, APP_STATES_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
