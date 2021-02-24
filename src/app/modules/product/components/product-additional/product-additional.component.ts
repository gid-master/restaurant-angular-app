import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { IProductAdditional, IProductAdditionalIncrement } from "src/app/store/product/interfaces/product.interface";

@Component({
  selector: "app-product-additional",
  templateUrl: "./product-additional.component.html",
  styleUrls: ["./product-additional.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAdditionalComponent implements OnChanges {
  @Input() maxAdditionals: number;
  @Input() additionals: IProductAdditional[];
  @Output() incrementClicked: EventEmitter<IProductAdditionalIncrement> = new EventEmitter<IProductAdditionalIncrement>();
  public disableIncrement: boolean;

  ngOnChanges({ additionals }: SimpleChanges) {
    const total: number = additionals.currentValue.reduce((totalItems: number, { quantity }) => totalItems + quantity, 0);
    this.disableIncrement = total === this.maxAdditionals;
  }
}
