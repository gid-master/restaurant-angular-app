import { IUserAuthenticated } from "../interfaces/login.interface";

export const LOGIN_FEATURE_KEY = "login";

export interface ILoginState {
  user: IUserAuthenticated;
  error: string;
  processing: boolean;
}

export const initialState: ILoginState = {
  user: null,
  error: null,
  processing: null,
};
