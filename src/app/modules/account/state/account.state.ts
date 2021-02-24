import { IOrder } from "../interfaces/account.interface";

export const ACCOUNT_FEATURE_KEY = "account";

export interface IAccountState {
  orders: IOrder[];
}

export const initialState: IAccountState = {
  orders: [],
};
