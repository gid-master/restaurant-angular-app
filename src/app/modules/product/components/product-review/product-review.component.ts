import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IProductReview } from "src/app/store/product/interfaces/product.interface";

@Component({
  selector: "app-product-review",
  templateUrl: "./product-review.component.html",
  styleUrls: ["./product-review.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductReviewComponent {
  @Input() reviews: IProductReview;
}
