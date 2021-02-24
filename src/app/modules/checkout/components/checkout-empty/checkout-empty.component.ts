import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-checkout-empty",
  templateUrl: "./checkout-empty.component.html",
  styleUrls: ["./checkout-empty.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutEmptyComponent {
  @Output() backClicked: EventEmitter<string> = new EventEmitter<string>();
}
