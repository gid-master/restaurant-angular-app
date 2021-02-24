import { Action } from "@ngrx/store";
import { IUser } from "../interfaces/user.interface";

export enum UserActionTypes {
  AUTHENTICATE_USER = "[User] Authenticate User",
  LOGOUT_USER = "[Login] Logout User",
  SET_USER = "[User] Set User",
  PUSH_PERMISSION = "[User] User Push Permission",
}

export class AuthenticateUser implements Action {
  readonly type = UserActionTypes.AUTHENTICATE_USER;
}

export class LogoutUser implements Action {
  readonly type = UserActionTypes.LOGOUT_USER;
}
export class SetUser implements Action {
  readonly type = UserActionTypes.SET_USER;
  constructor(public payload: IUser) {}
}

export class PushPermission implements Action {
  readonly type = UserActionTypes.PUSH_PERMISSION;
  constructor(public payload: string) {}
}

export type UserAction = AuthenticateUser | LogoutUser | SetUser | PushPermission;
