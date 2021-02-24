import { Action } from "@ngrx/store";
import { IOrder, IOrderReview } from "../interfaces/account.interface";

export enum AccountActionTypes {
  GET_ORDERS = "[Account] Get Orders: Initial",
  GET_ORDERS_SUCCESS = "[Account] Get Orders: Success",
  REVIEW_ORDER = "[Account] Review Order: Initial",
  REVIEW_ORDER_SUCCESS = "[Account] Review Order: Success",
}

export class GetOrders implements Action {
  readonly type = AccountActionTypes.GET_ORDERS;
}

export class GetOrdersSuccess implements Action {
  readonly type = AccountActionTypes.GET_ORDERS_SUCCESS;
  constructor(public payload: IOrder[]) {}
}

export class ReviewOrder implements Action {
  readonly type = AccountActionTypes.REVIEW_ORDER;
  constructor(public payload: IOrderReview) {}
}
export class ReviewOrderSuccess implements Action {
  readonly type = AccountActionTypes.REVIEW_ORDER_SUCCESS;
  constructor(public payload: IOrderReview) {}
}

export type AccountAction = GetOrders | GetOrdersSuccess | ReviewOrder | ReviewOrderSuccess;
