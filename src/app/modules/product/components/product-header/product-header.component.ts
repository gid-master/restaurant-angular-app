import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { IProduct } from "src/app/store/product/interfaces/product.interface";

@Component({
  selector: "app-product-header",
  templateUrl: "./product-header.component.html",
  styleUrls: ["./product-header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHeaderComponent {
  @Input() product: IProduct;
  @Output() backClicked: EventEmitter<string> = new EventEmitter<string>();
}
