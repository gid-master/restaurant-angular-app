import { IAccountState, initialState } from "./account.state";
import { AccountAction, AccountActionTypes } from "./account.actions";

export function accountReducer(state: IAccountState = initialState, action: AccountAction): IAccountState {
  switch (action.type) {
    case AccountActionTypes.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      };

    case AccountActionTypes.REVIEW_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.map((data) => {
          if (data.id === action.payload.orderId) {
            data.products = data.products.map((product) => {
              product.review = product.itemId === action.payload.itemId ? action.payload.review : product.review;
              return product;
            });
          }
          return data;
        }),
      };

    default:
      return state;
  }
}
