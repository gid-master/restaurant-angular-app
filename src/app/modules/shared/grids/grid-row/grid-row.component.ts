import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { IProduct } from "src/app/store/product/interfaces/product.interface";

@Component({
  selector: "app-grid-row",
  templateUrl: "./grid-row.component.html",
  styleUrls: ["./grid-row.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridRowComponent {
  @Input() type: string;
  @Input() products: IProduct[];
  @Output() productClicked: EventEmitter<string> = new EventEmitter<string>();
}
