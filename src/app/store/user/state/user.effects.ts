import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, map, tap } from "rxjs/operators";
import * as userActions from "./user.actions";
import { IResponse } from "src/app/interfaces/response.interface";
import { IUser } from "../interfaces/user.interface";
import { UserService } from "../services/user.service";

@Injectable()
export class UserEffects {
  @Effect()
  authenticateUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.AuthenticateUser>(userActions.UserActionTypes.AUTHENTICATE_USER),
    switchMap(() => this.userService.authenticate()),
    map((response: IResponse<IUser>) => (response.success ? response.data : null)),
    map((user: IUser) => new userActions.SetUser(user))
  );

  @Effect()
  logoutUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LogoutUser>(userActions.UserActionTypes.LOGOUT_USER),
    tap(() => this.userService.logout()),
    map(() => new userActions.SetUser(null))
  );

  @Effect({ dispatch: false })
  pushPermission$ = this.actions$.pipe(
    ofType<userActions.PushPermission>(userActions.UserActionTypes.PUSH_PERMISSION),
    map((action) => action.payload),
    switchMap((pushPermission: string) => this.userService.pushPermission(pushPermission))
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
