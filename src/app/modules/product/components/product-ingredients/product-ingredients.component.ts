import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-product-ingredients",
  templateUrl: "./product-ingredients.component.html",
  styleUrls: ["./product-ingredients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductIngredientsComponent {
  @Input() ingredients: string[];
}
