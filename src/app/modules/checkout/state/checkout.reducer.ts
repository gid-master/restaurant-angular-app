import { ICheckoutState, initialState } from "./checkout.state";
import { CheckoutAction, CheckoutActionTypes } from "./checkout.actions";

export function checkoutReducer(state: ICheckoutState = initialState, action: CheckoutAction): ICheckoutState {
  switch (action.type) {
    case CheckoutActionTypes.PROCESS_CHECKOUT:
      return {
        ...state,
        processing: true,
        processed: false,
        error: null,
      };

    case CheckoutActionTypes.PROCESS_CHECKOUT_SUCCESS:
      return {
        ...state,
        processing: false,
        processed: action.payload.success,
        error: action.payload.message,
      };

    default:
      return state;
  }
}
