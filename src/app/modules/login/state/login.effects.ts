import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, map, tap } from "rxjs/operators";

import { IAuthentication, IUserAuthenticated } from "../interfaces/login.interface";
import { LoginService } from "../services/login.service";
import * as loginActions from "./login.actions";

import { IResponse } from "src/app/interfaces/response.interface";
import { userActions } from "src/app/store/user/state";

@Injectable()
export class LoginEffects {
  @Effect()
  registerUser$: Observable<Action> = this.actions$.pipe(
    ofType<loginActions.RegisterUser>(loginActions.LoginActionTypes.REGISTER_USER),
    map((action) => action.payload),
    switchMap((authentication: IAuthentication) => this.loginService.register(authentication)),
    map((response: IResponse<IUserAuthenticated>) => {
      if (response.success) {
        return new loginActions.SetUser(response.data);
      } else {
        return new loginActions.SetError(response.message);
      }
    })
  );

  @Effect()
  loginUser$: Observable<Action> = this.actions$.pipe(
    ofType<loginActions.LoginUser>(loginActions.LoginActionTypes.LOGIN_USER),
    map((action) => action.payload),
    switchMap((authentication: IAuthentication) => this.loginService.login(authentication)),
    map((response: IResponse<IUserAuthenticated>) => {
      if (response.success) {
        return new loginActions.SetUser(response.data);
      } else {
        return new loginActions.SetError(response.message);
      }
    })
  );

  @Effect()
  setUser$: Observable<Action> = this.actions$.pipe(
    ofType<loginActions.SetUser>(loginActions.LoginActionTypes.SET_USER),
    map((action) => action.payload),
    map(({ id, name, email }) => new userActions.SetUser({ id, name, email }))
  );

  constructor(private actions$: Actions, private loginService: LoginService) {}
}
