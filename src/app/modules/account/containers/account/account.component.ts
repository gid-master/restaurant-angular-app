import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { IUser } from "src/app/store/user/interfaces/user.interface";
import { fromUser, userActions } from "src/app/store/user/state";

import { IOrder, IOrderReview, IOrderSummary } from "../../interfaces/account.interface";
import { accountActions, fromAccount, IAccountState } from "../../state";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {
  public orders$: Observable<IOrder[]>;
  public ordersSummary$: Observable<IOrderSummary>;
  public user$: Observable<IUser>;
  public collapse: string;

  constructor(private store: Store<IAccountState>, private router: Router) {
    this.store.dispatch(new accountActions.GetOrders());

    this.orders$ = this.store.select(fromAccount.getOrders);
    this.ordersSummary$ = this.store.select(fromAccount.getOrdersSummary);
    this.user$ = this.store.select(fromUser.getUser);
  }

  public onOrderClicked(orderId: string): void {
    this.collapse = orderId;
  }

  public onReviewClicked(review: IOrderReview): void {
    this.store.dispatch(new accountActions.ReviewOrder(review));
  }

  public onLogoutClicked(): void {
    this.store.dispatch(new userActions.LogoutUser());
    this.router.navigate(["/login"]);
  }
}
