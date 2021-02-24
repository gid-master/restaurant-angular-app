import { Action } from "@ngrx/store";
import { IProduct, IProductAdditionalIncrement, IProductEdit } from "../interfaces/product.interface";

export enum ProductActionTypes {
  GET_PRODUCTS = "[Product] Get Products: Initiate",
  GET_PRODUCTS_SUCCESS = "[Product] Get Products: Success",
  SET_TERM_SEARCH = "[Product] Set Term Search",
  SET_SORT = "[Product] Set Sort",
  SET_FILTER = "[Product] Set Filter",
  SET_PREFERRED_PRODUCT = "[Product] Set Preferred Product",
  SET_PREFERRED_PRODUCT_SUCCESS = "[Product] Set Preferred Product: Success",
  SET_PRODUCT_ADDITIONAL_INCREMENT = "[Product] Set Product Additional Increment",
  SET_PRODUCT_COMMENTS = "[Product] Set Product Additional Comments",
  SET_PRODUCT_QUANTITY = "[Product] Set Product Additional Quantity",
}

export class GetProducts implements Action {
  readonly type = ProductActionTypes.GET_PRODUCTS;
}

export class GetProductsSuccess implements Action {
  readonly type = ProductActionTypes.GET_PRODUCTS_SUCCESS;
  constructor(public payload: IProduct[]) {}
}

export class SetTermSearch implements Action {
  readonly type = ProductActionTypes.SET_TERM_SEARCH;
  constructor(public payload: string) {}
}

export class SetSort implements Action {
  readonly type = ProductActionTypes.SET_SORT;
  constructor(public payload: string) {}
}

export class SetFilter implements Action {
  readonly type = ProductActionTypes.SET_FILTER;
  constructor(public payload: string) {}
}

export class SetPreferredProduct implements Action {
  readonly type = ProductActionTypes.SET_PREFERRED_PRODUCT;
  constructor(public payload: IProductEdit) {}
}

export class SetPreferredProductSuccess implements Action {
  readonly type = ProductActionTypes.SET_PREFERRED_PRODUCT_SUCCESS;
  constructor(public payload: IProduct) {}
}

export class SetProductAdditionalIncrement implements Action {
  readonly type = ProductActionTypes.SET_PRODUCT_ADDITIONAL_INCREMENT;
  constructor(public payload: IProductAdditionalIncrement) {}
}
export class SetProductComments implements Action {
  readonly type = ProductActionTypes.SET_PRODUCT_COMMENTS;
  constructor(public payload: string) {}
}
export class SetProductQuantity implements Action {
  readonly type = ProductActionTypes.SET_PRODUCT_QUANTITY;
  constructor(public payload: number) {}
}

export type ProductAction =
  | GetProducts
  | GetProductsSuccess
  | SetTermSearch
  | SetSort
  | SetFilter
  | SetPreferredProduct
  | SetPreferredProductSuccess
  | SetProductAdditionalIncrement
  | SetProductComments
  | SetProductQuantity;
