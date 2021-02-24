import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IResponse } from "src/app/interfaces/response.interface";
import { IOrder, IOrderReview } from "../interfaces/account.interface";

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  public getOrders(): Observable<IResponse<IOrder[]>> {
    return this.http.get<IResponse<IOrder[]>>("order");
  }

  public reviewOrder(review: IOrderReview): Observable<IResponse<IOrderReview>> {
    return this.http.post<IResponse<IOrderReview>>("order/review", review);
  }
}
