import { ICartState, initialState } from "./cart.state";
import { CheckoutAction, CartActionTypes } from "./cart.actions";

export function cartReducer(state: ICartState = initialState, action: CheckoutAction): ICartState {
  switch (action.type) {
    case CartActionTypes.LOAD_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      };

    case CartActionTypes.SET_CART:
      return {
        ...state,
        cart: [...state.cart.filter((data) => data.id !== action.payload.id), action.payload],
      };

    case CartActionTypes.DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((data) => data.id !== action.payload),
      };

    case CartActionTypes.REMOVE_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}
