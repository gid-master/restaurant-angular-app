import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, map, filter, tap } from "rxjs/operators";
import * as checkoutActions from "./checkout.actions";
import { IResponse } from "src/app/interfaces/response.interface";
import { ICheckout } from "../interfaces/checkout.interface";
import { CheckoutService } from "../services/checkout.service";
import { StorageService } from "src/app/services/storage.service";
import { cartActions } from "src/app/store/cart/state";

@Injectable()
export class CheckoutEffects {
  @Effect()
  processCheckout$: Observable<Action> = this.actions$.pipe(
    ofType<checkoutActions.ProcessCheckout>(checkoutActions.CheckoutActionTypes.PROCESS_CHECKOUT),
    map((action) => action.payload),
    switchMap((checkout: ICheckout) => this.checkoutService.processCheckout(checkout)),
    map((response: IResponse) => new checkoutActions.ProcessCheckoutSuccess(response))
  );

  @Effect()
  removeCart$: Observable<Action> = this.actions$.pipe(
    ofType<checkoutActions.ProcessCheckoutSuccess>(checkoutActions.CheckoutActionTypes.PROCESS_CHECKOUT_SUCCESS),
    map((action) => action.payload),
    filter((response: IResponse) => response.success),
    tap(() => this.storageService.removeLocalStorageItem("cart")),
    map(() => new cartActions.RemoveCart())
  );

  constructor(private actions$: Actions, private checkoutService: CheckoutService, private storageService: StorageService) {}
}
