import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { IProduct } from "src/app/store/product/interfaces/product.interface";

@Component({
  selector: "app-card-cover",
  templateUrl: "./card-cover.component.html",
  styleUrls: ["./card-cover.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCoverComponent {
  @Input() product: IProduct;
  @Output() productClicked: EventEmitter<string> = new EventEmitter<string>();
}
