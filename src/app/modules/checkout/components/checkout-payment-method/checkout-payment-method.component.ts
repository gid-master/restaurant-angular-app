import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { PaymentMethodEnum, IPaymentData, ICreditCard } from "../../interfaces/checkout.interface";
import { CheckoutCreditCardComponent } from "../checkout-credit-card/checkout-credit-card.component";
import { CheckoutGiftCardComponent } from "../checkout-gift-card/checkout-gift-card.component";

@Component({
  selector: "app-checkout-payment-method",
  templateUrl: "./checkout-payment-method.component.html",
  styleUrls: ["./checkout-payment-method.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutPaymentMethodComponent {
  @Input() disabled: boolean;
  @Input() paymentMethod: PaymentMethodEnum;
  @Output() paymentMethodSelected: EventEmitter<PaymentMethodEnum> = new EventEmitter<PaymentMethodEnum>();
  @Output() paymentMethodSubmitted: EventEmitter<IPaymentData> = new EventEmitter<IPaymentData>();

  @ViewChild(CheckoutCreditCardComponent, { static: false }) creditCardForm: CheckoutCreditCardComponent;
  @ViewChild(CheckoutGiftCardComponent, { static: false }) giftCardForm: CheckoutGiftCardComponent;

  public creditCard: ICreditCard;
  public giftCard: string;
  public PaymentMethodEnum = PaymentMethodEnum;

  public submit(): void {
    if (this.paymentMethod === PaymentMethodEnum.CREDIT_CARD) {
      this.creditCardForm.submit();
    } else {
      this.giftCardForm.submit();
    }
  }

  public reset(): void {
    if (this.paymentMethod === PaymentMethodEnum.CREDIT_CARD) {
      this.creditCardForm.reset();
    } else {
      this.giftCardForm.reset();
    }
  }

  public onFormSubmitted(): void {
    this.paymentMethodSubmitted.emit({
      creditCard: this.creditCard,
      giftCard: this.giftCard,
    });
  }

  public onGiftCardChanged(data: string): void {
    this.giftCard = data;
  }

  public onCreditCardChanged(data: ICreditCard): void {
    this.creditCard = data;
  }
}
