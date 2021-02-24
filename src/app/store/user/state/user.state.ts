import { IUser } from "../interfaces/user.interface";

export const USER_FEATURE_KEY = "user";

export interface IUserState {
  user: IUser;
  authenticated: boolean;
  pushPermission: string;
}

export const initialState: IUserState = {
  user: null,
  authenticated: null,
  pushPermission: null,
};
