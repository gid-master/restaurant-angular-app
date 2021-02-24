import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-product-add-to-cart",
  templateUrl: "./product-add-to-cart.component.html",
  styleUrls: ["./product-add-to-cart.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAddToCartComponent {
  @Input() quantity: number;
  @Input() total: number;
  @Output() incrementClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() addClicked: EventEmitter<string> = new EventEmitter<string>();
}
