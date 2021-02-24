import { Action } from "@ngrx/store";
import { ICart } from "../interfaces/cart.interface";

export enum CartActionTypes {
  LOAD_CART = "[Cart] Load Cart: Initial",
  LOAD_CART_SUCCESS = "[Cart] Load Cart: Success",
  SET_CART = "[Cart] Get Cart",
  DELETE_CART = "[Cart] Delete Cart",
  REMOVE_CART = "[Cart] Remove Cart",
}

export class LoadCart implements Action {
  readonly type = CartActionTypes.LOAD_CART;
}

export class LoadCartSuccess implements Action {
  readonly type = CartActionTypes.LOAD_CART_SUCCESS;
  constructor(public payload: ICart[]) {}
}

export class SetCart implements Action {
  readonly type = CartActionTypes.SET_CART;
  constructor(public payload: ICart) {}
}

export class DeleteCart implements Action {
  readonly type = CartActionTypes.DELETE_CART;
  constructor(public payload: string) {}
}

export class RemoveCart implements Action {
  readonly type = CartActionTypes.REMOVE_CART;
}

export type CheckoutAction = LoadCart | LoadCartSuccess | SetCart | DeleteCart | RemoveCart;
