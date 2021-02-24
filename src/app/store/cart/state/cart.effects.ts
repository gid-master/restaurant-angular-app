import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, map, tap } from "rxjs/operators";
import * as cartActions from "./cart.actions";
import { ICart } from "../interfaces/cart.interface";
import { StorageService } from "src/app/services/storage.service";

@Injectable()
export class CartEffects {
  @Effect()
  loadCart$: Observable<Action> = this.actions$.pipe(
    ofType<cartActions.LoadCart>(cartActions.CartActionTypes.LOAD_CART),
    switchMap(() => this.storageService.getLocalStorageItem("cart")),
    map((cart: ICart[]) => new cartActions.LoadCartSuccess(cart ? cart : []))
  );

  @Effect({ dispatch: false })
  addToCart$ = this.actions$.pipe(
    ofType<cartActions.SetCart>(cartActions.CartActionTypes.SET_CART),
    map((action) => action.payload),
    switchMap((cart: ICart) =>
      this.storageService.getLocalStorageItem("cart").pipe(
        map((data: ICart[]) => (data ? data : [])),
        map((data: ICart[]) => {
          const index: number = data.findIndex((item) => item.id === cart.id);
          if (index >= 0) {
            data[index] = cart;
          } else {
            data.push(cart);
          }

          return data;
        })
      )
    ),
    tap((cart: ICart[]) => this.storageService.setLocalStorageItem("cart", cart))
  );

  @Effect({ dispatch: false })
  deleteFromCart$ = this.actions$.pipe(
    ofType<cartActions.DeleteCart>(cartActions.CartActionTypes.DELETE_CART),
    map((action) => action.payload),
    switchMap((cartId: string) =>
      this.storageService.getLocalStorageItem("cart").pipe(
        map((cart: ICart[]) => {
          return cart ? cart.filter((data) => data.id !== cartId) : [];
        })
      )
    ),
    tap((cart: ICart[]) => this.storageService.setLocalStorageItem("cart", cart))
  );

  constructor(private actions$: Actions, private storageService: StorageService) {}
}
