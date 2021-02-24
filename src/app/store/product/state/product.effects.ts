import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import * as productActions from "./product.actions";
import { IResponse } from "src/app/interfaces/response.interface";
import { IProduct } from "../interfaces/product.interface";
import { ProductService } from "../services/product.service";
import { fromProduct, IProductState } from "src/app/store/product/state";
import { fromCart } from "src/app/store/cart/state";
import { ICart } from "src/app/store/cart/interfaces/cart.interface";

@Injectable()
export class ProductEffects {
  @Effect()
  getAllProducts$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.GetProducts>(productActions.ProductActionTypes.GET_PRODUCTS),
    switchMap(() => this.productService.getAllProducts()),
    map((response: IResponse<IProduct[]>) => (response.success ? response.data : [])),
    map((products: IProduct[]) => new productActions.GetProductsSuccess(products))
  );

  @Effect()
  GetPreferredProduct$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.SetPreferredProduct>(productActions.ProductActionTypes.SET_PREFERRED_PRODUCT),
    map((action) => action.payload),
    withLatestFrom(this.store.select(fromProduct.getProducts), this.store.select(fromCart.getCart)),
    switchMap(([data, products, cart]) => {
      if (data.cartId) {
        return of(cart.find((item: ICart) => item.id === data.cartId).product);
      } else {
        return of(products.find((product: IProduct) => product.sku === data.productSku));
      }
    }),
    map((product: IProduct) => new productActions.SetPreferredProductSuccess(product))
  );

  constructor(private actions$: Actions, private store: Store<IProductState>, private productService: ProductService) {}
}
