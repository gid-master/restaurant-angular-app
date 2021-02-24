import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { IOrder, IOrderReview } from "../../interfaces/account.interface";

@Component({
  selector: "app-account-order-accordion",
  templateUrl: "./account-order-accordion.component.html",
  styleUrls: ["./account-order-accordion.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountOrderAccordionComponent {
  @Input() collapse: string;
  @Input() orders: IOrder[];
  @Output() orderClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() reviewClicked: EventEmitter<IOrderReview> = new EventEmitter<IOrderReview>();
}
