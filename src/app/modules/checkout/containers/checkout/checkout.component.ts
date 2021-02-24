import { Component, ViewChild, OnDestroy, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

import { settingsActions } from "src/app/store/settings/state";

import { ICart, ICartSummary } from "src/app/store/cart/interfaces/cart.interface";
import { cartActions, fromCart } from "src/app/store/cart/state";

import { IUser } from "src/app/store/user/interfaces/user.interface";
import { fromUser } from "src/app/store/user/state";

import { ICheckout, IPaymentData, PaymentMethodEnum } from "../../interfaces/checkout.interface";
import { checkoutActions, fromCheckout, ICheckoutState } from "../../state";

import { CheckoutPaymentMethodComponent } from "../../components/checkout-payment-method/checkout-payment-method.component";
import { filterAdditionals } from "../../operators/checkout.operator";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public user$: Observable<IUser>;
  public cart$: Observable<ICart[]>;
  public cartSummary$: Observable<ICartSummary>;
  public processed$: Observable<boolean>;
  public processing$: Observable<boolean>;

  public checkoutSubscription: Subscription;
  public paymentMethod: PaymentMethodEnum = PaymentMethodEnum.CREDIT_CARD;
  public preferredCart: ICart;

  @ViewChild(CheckoutPaymentMethodComponent, { static: false }) paymentForm: CheckoutPaymentMethodComponent;

  constructor(private store: Store<ICheckoutState>, private router: Router) {
    this.user$ = this.store.select(fromUser.getUser);
    this.cart$ = this.store.select(fromCart.getCart).pipe(filterAdditionals());
    this.cartSummary$ = this.store.select(fromCart.getCartSummary);
    this.processed$ = this.store.select(fromCheckout.getProcessed);
    this.processing$ = this.store.select(fromCheckout.getProcessing);
  }

  ngOnInit(): void {
    this.checkoutSubscription = this.store
      .select(fromCheckout.getError)
      .pipe(
        filter((error: string) => Boolean(error)),
        tap((error: string) => {
          this.store.dispatch(new settingsActions.ShowModal({ show: false }));
          this.store.dispatch(new settingsActions.ShowSnackbar(error));
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.checkoutSubscription.unsubscribe();
  }

  public onKeepOrderingClicked(): void {
    this.router.navigate(["/menu"]);
  }

  public onOrderProcessed(): void {
    this.store.dispatch(new settingsActions.ShowModal({ show: false }));
    this.router.navigate(["/menu"]);
  }

  public onCartClicked(cart: ICart) {
    this.preferredCart = cart;
    this.store.dispatch(new settingsActions.ShowModal({ id: "actions", show: true }));
  }

  public onBackClicked(): void {
    this.router.navigate(["/menu"]);
  }

  public onPaymentMethodSelected(paymentMethod: PaymentMethodEnum): void {
    this.paymentMethod = paymentMethod;
    this.paymentForm.reset();
  }

  public onLoginClicked(): void {
    this.router.navigate(["/login"]);
  }

  public onPaymentClicked(): void {
    this.paymentForm.submit();
  }

  public onPaymentMethodSubmitted(data: IPaymentData, cart: ICart[]): void {
    const checkout: ICheckout = {
      products: cart.map((item) => item.product),
      paymentMethod: this.paymentMethod,
      giftCard: this.paymentMethod === PaymentMethodEnum.GIFT_CARD ? data.giftCard : null,
      creditCard: this.paymentMethod === PaymentMethodEnum.CREDIT_CARD ? data.creditCard : null,
    };

    this.store.dispatch(new settingsActions.ShowModal({ id: "payment", show: true, disableClick: true }));
    this.store.dispatch(new checkoutActions.ProcessCheckout(checkout));
  }

  public onEditCartClicked(): void {
    this.store.dispatch(new settingsActions.ShowModal({ show: false }));
    this.router.navigate(["/product/", this.preferredCart.product.sku], { queryParams: { edit: this.preferredCart.id } });
  }

  public onDeleteCartClicked(): void {
    this.store.dispatch(new settingsActions.ShowModal({ show: false }));
    this.store.dispatch(new cartActions.DeleteCart(this.preferredCart.id));
  }
}
