import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { filter, tap } from "rxjs/operators";

import { IAuthentication, IUserAuthenticated } from "../../interfaces/login.interface";
import { fromLogin, ILoginState, loginActions } from "../../state";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public processing$: Observable<boolean>;
  public error$: Observable<string>;
  public user$: Observable<IUserAuthenticated>;
  public enableRegister: boolean;
  public connectionSubscription: Subscription;

  constructor(private store: Store<ILoginState>, private router: Router) {
    this.store.dispatch(new loginActions.Initialize());

    this.processing$ = this.store.select(fromLogin.getProcessing);
    this.error$ = this.store.select(fromLogin.getError);
    this.user$ = this.store.select(fromLogin.getUserAuthenticated).pipe(
      filter((user: IUserAuthenticated) => Boolean(user)),
      tap(() => this.router.navigate(["/account"]))
    );
  }

  public onEnableRegisterClicked(enable: boolean): void {
    this.enableRegister = enable;
  }

  public onAuthenticateClicked(authentication: IAuthentication): void {
    this.store.dispatch(new loginActions.LoginUser(authentication));
  }

  public onRegistereClicked(authentication: IAuthentication): void {
    this.store.dispatch(new loginActions.RegisterUser(authentication));
  }
}
