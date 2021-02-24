import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { IProduct } from "src/app/store/product/interfaces/product.interface";

@Component({
  selector: "app-card-details",
  templateUrl: "./card-details.component.html",
  styleUrls: ["./card-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsComponent {
  @Input() product: IProduct;
  @Output() productClicked: EventEmitter<string> = new EventEmitter<string>();
}
