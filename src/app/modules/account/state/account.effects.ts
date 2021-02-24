import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, map, tap } from "rxjs/operators";
import * as accountActions from "./account.actions";
import { IResponse } from "src/app/interfaces/response.interface";
import { AccountService } from "../services/account.service";
import { IOrder, IOrderReview } from "../interfaces/account.interface";

@Injectable()
export class AccountEffects {
  @Effect()
  getOrder$: Observable<Action> = this.actions$.pipe(
    ofType<accountActions.GetOrders>(accountActions.AccountActionTypes.GET_ORDERS),
    switchMap(() => this.accountService.getOrders()),
    map((response: IResponse<IOrder[]>) => (response.success ? response.data : [])),
    map((orders: IOrder[]) => new accountActions.GetOrdersSuccess(orders))
  );

  @Effect()
  reviewOrder$: Observable<Action> = this.actions$.pipe(
    ofType<accountActions.ReviewOrder>(accountActions.AccountActionTypes.REVIEW_ORDER),
    map((action) => action.payload),
    switchMap((review: IOrderReview) => this.accountService.reviewOrder(review)),
    map((response: IResponse<IOrderReview>) => (response.success ? response.data : null)),
    map((review: IOrderReview) => new accountActions.ReviewOrderSuccess(review))
  );

  constructor(private actions$: Actions, private accountService: AccountService) {}
}
