import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAccountState, ACCOUNT_FEATURE_KEY } from "./account.state";
import { IOrder } from "../interfaces/account.interface";
import { IOrderSummary } from "../interfaces/account.interface";

const getAccountState = createFeatureSelector<IAccountState>(ACCOUNT_FEATURE_KEY);

export const getOrders = createSelector<object, IAccountState, IOrder[]>(getAccountState, (state) => state.orders);
export const getOrdersSummary = createSelector<object, IAccountState, IOrderSummary>(getAccountState, (state) => {
  const quantityOrders: number = state.orders.length;
  const totalProducts: number = state.orders.reduce((value: number, order: IOrder) => value + order.total, 0);
  const quantityProducts = state.orders.reduce(
    (value: number, { products }) => value + products.reduce((totalProduct: number, { quantity }) => totalProduct + quantity, 0),
    0
  );

  return {
    quantityOrders,
    totalProducts,
    quantityProducts,
  };
});
