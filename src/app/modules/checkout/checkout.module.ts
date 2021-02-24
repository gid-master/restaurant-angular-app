import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { DirectivesModule } from "src/app/directives/directives.module";

import { CheckoutService } from "./services/checkout.service";

// components
import { CheckoutRoutingModule } from "./checkout-routing.module";
import { CheckoutComponent } from "./containers/checkout/checkout.component";
import { CheckoutActionComponent } from "./components/checkout-action/checkout-action.component";
import { CheckoutCreditCardComponent } from "./components/checkout-credit-card/checkout-credit-card.component";
import { CheckoutEmptyComponent } from "./components/checkout-empty/checkout-empty.component";
import { CheckoutGiftCardComponent } from "./components/checkout-gift-card/checkout-gift-card.component";
import { CheckoutPaymentMethodComponent } from "./components/checkout-payment-method/checkout-payment-method.component";
import { CheckoutProductCardComponent } from "./components/checkout-product-card/checkout-product-card.component";
import { CheckoutProductsComponent } from "./components/checkout-products/checkout-products.component";
import { CheckoutTotalComponent } from "./components/checkout-total/checkout-total.component";

// NGRX
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CHECKOUT_FEATURE_KEY } from "./state/checkout.state";
import { checkoutReducer } from "./state/checkout.reducer";
import { CheckoutEffects } from "./state/checkout.effects";

@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutActionComponent,
    CheckoutCreditCardComponent,
    CheckoutEmptyComponent,
    CheckoutGiftCardComponent,
    CheckoutPaymentMethodComponent,
    CheckoutProductCardComponent,
    CheckoutProductsComponent,
    CheckoutTotalComponent,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DirectivesModule,
    // NGRX
    StoreModule.forFeature(CHECKOUT_FEATURE_KEY, checkoutReducer),
    EffectsModule.forFeature([CheckoutEffects]),
  ],
  providers: [CheckoutService],
})
export class CheckoutModule {}
