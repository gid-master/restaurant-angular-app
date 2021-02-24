import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICartState, CART_FEATURE_KEY } from "./cart.state";
import { ICart, ICartSummary } from "../interfaces/cart.interface";

const getCartState = createFeatureSelector<ICartState>(CART_FEATURE_KEY);

export const getCartQuantity = createSelector<object, ICartState, number>(getCartState, (state) => state.cart.length);
export const getCart = createSelector<object, ICartState, ICart[]>(getCartState, (state) => state.cart);
export const getCartSummary = createSelector<object, ICartState, ICartSummary>(getCartState, (state) => {
  const totalProducts: number = state.cart.reduce((value: number, { product }) => value + product.price * product.quantity, 0);

  const quantityProducts: number = state.cart.reduce((value: number, { product }) => value + product.quantity, 0);

  const totalAdditionals = state.cart.reduce(
    (totalProduct: number, { product }) =>
      totalProduct + product.additionals.reduce((totalAdditional: number, { quantity, price }) => totalAdditional + quantity * price * product.quantity, 0),
    0
  );

  const quantityAdditionals = state.cart.reduce(
    (totalProduct: number, { product }) =>
      totalProduct + product.additionals.reduce((totalAdditional: number, { quantity }) => totalAdditional + quantity * product.quantity, 0),
    0
  );

  const total: number = totalProducts + totalAdditionals;

  return {
    totalProducts,
    quantityProducts,
    totalAdditionals,
    quantityAdditionals,
    total,
  };
});
