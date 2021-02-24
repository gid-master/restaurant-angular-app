import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges, ChangeDetectionStrategy } from "@angular/core";
import { IProduct, IProductAdditional } from "src/app/store/product/interfaces/product.interface";

@Component({
  selector: "app-checkout-product-card",
  templateUrl: "./checkout-product-card.component.html",
  styleUrls: ["./checkout-product-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutProductCardComponent implements OnChanges {
  @Input() product: IProduct;
  @Output() cartClicked: EventEmitter<string> = new EventEmitter<string>();

  public total: number;

  ngOnChanges({ product }: SimpleChanges) {
    const additionals: number = product.currentValue.additionals.reduce(
      (total: number, additional: IProductAdditional) => total + additional.quantity * additional.price,
      0
    );

    this.total = (additionals + product.currentValue.price) * product.currentValue.quantity;
  }
}
