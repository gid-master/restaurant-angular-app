import { Action } from "@ngrx/store";
import { IResponse } from "src/app/interfaces/response.interface";
import { ICheckout } from "../interfaces/checkout.interface";

export enum CheckoutActionTypes {
  PROCESS_CHECKOUT = "[Checkout] Checkout: Initial",
  PROCESS_CHECKOUT_SUCCESS = "[Checkout] Checkout: Success",
}

export class ProcessCheckout implements Action {
  readonly type = CheckoutActionTypes.PROCESS_CHECKOUT;
  constructor(public payload: ICheckout) {}
}

export class ProcessCheckoutSuccess implements Action {
  readonly type = CheckoutActionTypes.PROCESS_CHECKOUT_SUCCESS;
  constructor(public payload: IResponse) {}
}

export type CheckoutAction = ProcessCheckout | ProcessCheckoutSuccess;
