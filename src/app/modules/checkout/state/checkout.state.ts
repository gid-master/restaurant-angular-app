export const CHECKOUT_FEATURE_KEY = "checkout";

export interface ICheckoutState {
  processing: boolean;
  processed: boolean;
  error: string;
}

export const initialState: ICheckoutState = {
  processing: false,
  processed: false,
  error: null,
};
