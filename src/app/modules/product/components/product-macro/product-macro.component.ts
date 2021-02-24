import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IProduct } from "src/app/store/product/interfaces/product.interface";

@Component({
  selector: "app-product-macro",
  templateUrl: "./product-macro.component.html",
  styleUrls: ["./product-macro.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductMacroComponent {
  @Input() product: IProduct;
}
