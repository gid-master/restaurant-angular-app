import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { IOrderProduct, IOrderReview } from "../../interfaces/account.interface";

@Component({
  selector: "app-account-order-card",
  templateUrl: "./account-order-card.component.html",
  styleUrls: ["./account-order-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountOrderCardComponent {
  @Input() orderId: string;
  @Input() product: IOrderProduct;
  @Output() reviewClicked: EventEmitter<IOrderReview> = new EventEmitter<IOrderReview>();
}
