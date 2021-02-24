import { ICart } from "../interfaces/cart.interface";

export const CART_FEATURE_KEY = "cart";

export interface ICartState {
  cart: ICart[];
}

export const initialState: ICartState = {
  cart: [],
};
