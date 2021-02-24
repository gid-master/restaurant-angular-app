import { Action } from "@ngrx/store";
import { IAuthentication, IUserAuthenticated } from "../interfaces/login.interface";

export enum LoginActionTypes {
  INITIALIZE = "[Login] Initialize",
  REGISTER_USER = "[Login] Register User",
  LOGIN_USER = "[Login] Login User",
  SET_USER = "[Login] Set User",
  SET_ERROR = "[Login] Set Error",
}

export class Initialize implements Action {
  readonly type = LoginActionTypes.INITIALIZE;
}

export class RegisterUser implements Action {
  readonly type = LoginActionTypes.REGISTER_USER;
  constructor(public payload: IAuthentication) {}
}

export class LoginUser implements Action {
  readonly type = LoginActionTypes.LOGIN_USER;
  constructor(public payload: IAuthentication) {}
}

export class SetUser implements Action {
  readonly type = LoginActionTypes.SET_USER;
  constructor(public payload: IUserAuthenticated) {}
}

export class SetError implements Action {
  readonly type = LoginActionTypes.SET_ERROR;
  constructor(public payload: string) {}
}

export type LoginAction = RegisterUser | LoginUser | SetUser | SetError | Initialize;
