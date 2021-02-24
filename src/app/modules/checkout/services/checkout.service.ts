import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IResponse } from "src/app/interfaces/response.interface";
import { RandomService } from "src/app/services/random.service";
import { ICheckout, ICreditCard } from "../interfaces/checkout.interface";

@Injectable()
export class CheckoutService {
  constructor(private http: HttpClient, private randomService: RandomService) {}

  // this function should be a stripe or any other getway lib that generates a token to be sent to the backend.
  // that's the right way to process it, so we don't keep any credit card information, just validate the token
  // complete the transaction and done !
  private generateCreditCardToken(creditCard: ICreditCard): string {
    return this.randomService.encodeData(creditCard.cardNumber.toString());
  }

  public processCheckout(checkout: ICheckout): Observable<IResponse> {
    return this.http.post<IResponse>("order", {
      ...checkout,
      creditCard: checkout.creditCard ? this.generateCreditCardToken(checkout.creditCard) : null,
    });
  }
}
