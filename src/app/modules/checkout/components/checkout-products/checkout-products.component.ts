import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { ICart } from "src/app/store/cart/interfaces/cart.interface";

@Component({
  selector: "app-checkout-products",
  templateUrl: "./checkout-products.component.html",
  styleUrls: ["./checkout-products.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutProductsComponent {
  @Input() cart: ICart[];
  @Output() cartClicked: EventEmitter<ICart> = new EventEmitter<ICart>();
}
