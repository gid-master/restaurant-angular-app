import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { IProduct } from "src/app/store/product/interfaces/product.interface";

@Component({
  selector: "app-grid-list",
  templateUrl: "./grid-list.component.html",
  styleUrls: ["./grid-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridListComponent {
  @Input() products: IProduct[];
  @Output() productClicked: EventEmitter<string> = new EventEmitter<string>();
}
