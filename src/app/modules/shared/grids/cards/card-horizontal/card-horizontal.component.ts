import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { IProduct } from "src/app/store/product/interfaces/product.interface";

@Component({
  selector: "app-card-horizontal",
  templateUrl: "./card-horizontal.component.html",
  styleUrls: ["./card-horizontal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHorizontalComponent {
  @Input() product: IProduct;
  @Output() productClicked: EventEmitter<string> = new EventEmitter<string>();
}
