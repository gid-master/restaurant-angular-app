import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { USER_MOCK } from "../mocks/UserMock";
import { PRODUCT_MOCK } from "../mocks/ProductMock";
import { ORDER_MOCK } from "../mocks/OrderMock";
import { environment } from "src/environments/environment";

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  private enableMock: boolean;

  constructor() {
    if (environment.backendTarget === "mock") {
      this.enableMock = true;
      console.log("MOCK ENABLED");
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.enableMock) {
      return next.handle(request);
    }

    switch (request.url) {
      case "user/authenticate":
        return of(new HttpResponse({ status: 200, body: USER_MOCK }));
      case "user/login":
      case "user/register":
        return of(new HttpResponse({ status: 200, body: { success: false, message: "user or password is wrong", data: null } }));
      // return of(new HttpResponse({ status: 200, body: USER_MOCK }));
      case "product":
        return of(new HttpResponse({ status: 200, body: PRODUCT_MOCK }));
      case "order":
        if (request.method === "GET") {
          return of(new HttpResponse({ status: 200, body: ORDER_MOCK }));
        } else {
          return of(new HttpResponse({ status: 200, body: { success: true, data: request.body } }));
          // return of(new HttpResponse({ status: 200, body: { success: false, message: "price changed" } }));
        }
      case "order/review":
        return of(new HttpResponse({ status: 200, body: { success: true, data: request.body } }));
      default:
        return next.handle(request);
    }
  }
}
