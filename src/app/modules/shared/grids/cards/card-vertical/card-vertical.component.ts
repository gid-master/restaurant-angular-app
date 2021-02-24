import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { IProduct } from "src/app/store/product/interfaces/product.interface";

@Component({
  selector: "app-card-vertical",
  templateUrl: "./card-vertical.component.html",
  styleUrls: ["./card-vertical.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardVerticalComponent {
  @Input() product: IProduct;
  @Output() productClicked: EventEmitter<string> = new EventEmitter<string>();
}
