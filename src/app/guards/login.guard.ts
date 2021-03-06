import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { first, map, filter, withLatestFrom } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { fromUser, IUserState } from "../store/user/state";
import { ConnectionService } from "../services/connection.service";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  constructor(private store: Store<IUserState>, private router: Router, private connection: ConnectionService) {}

  canActivate(): Observable<boolean> {
    return this.store.select(fromUser.getIsAuthenticated).pipe(
      withLatestFrom(this.connection.isOnline()),
      filter(([authenticated, isOnline]) => authenticated !== null || !isOnline),
      map(([authenticated, isOnline]) => {
        if (authenticated) {
          this.router.navigate(["/account"]);
          return false;
        }
        return true;
      }),
      first()
    );
  }
}
