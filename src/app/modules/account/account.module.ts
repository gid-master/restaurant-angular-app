import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { AccountService } from "./services/account.service";

// components
import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./containers/account/account.component";
import { AccountBioComponent } from "./components/account-bio/account-bio.component";
import { AccountOrderAccordionComponent } from "./components/account-order-accordion/account-order-accordion.component";
import { AccountOrderCardComponent } from "./components/account-order-card/account-order-card.component";
import { AccountOrderSummaryComponent } from "./components/account-order-summary/account-order-summary.component";

// NGRX
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { ACCOUNT_FEATURE_KEY } from "./state";
import { accountReducer } from "./state/account.reducer";
import { AccountEffects } from "./state/account.effects";

@NgModule({
  declarations: [AccountComponent, AccountBioComponent, AccountOrderAccordionComponent, AccountOrderCardComponent, AccountOrderSummaryComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    // NGRX
    StoreModule.forFeature(ACCOUNT_FEATURE_KEY, accountReducer),
    EffectsModule.forFeature([AccountEffects]),
  ],
  providers: [AccountService],
})
export class AccountModule {}
