import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { ICart } from "src/app/store/cart/interfaces/cart.interface";

@Component({
  selector: "app-checkout-action",
  templateUrl: "./checkout-action.component.html",
  styleUrls: ["./checkout-action.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutActionComponent implements OnChanges {
  @Input() cart: ICart;
  @Output() editCartClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteCartClicked: EventEmitter<string> = new EventEmitter<string>();
  public total: number;

  ngOnChanges({ cart }: SimpleChanges) {
    const additionals: number = cart.currentValue.product.additionals.reduce((total: number, { quantity, price }) => total + quantity * price, 0);
    this.total = (additionals + cart.currentValue.product.price) * cart.currentValue.product.quantity;
  }
}
