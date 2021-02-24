import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ICartSummary } from "src/app/store/cart/interfaces/cart.interface";

@Component({
  selector: "app-checkout-total",
  templateUrl: "./checkout-total.component.html",
  styleUrls: ["./checkout-total.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutTotalComponent {
  @Input() cartSummary: ICartSummary;
}
