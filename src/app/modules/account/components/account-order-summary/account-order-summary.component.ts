import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IOrderSummary } from "../../interfaces/account.interface";

@Component({
  selector: "app-account-order-summary",
  templateUrl: "./account-order-summary.component.html",
  styleUrls: ["./account-order-summary.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountOrderSummaryComponent {
  @Input() ordersSummary: IOrderSummary;
}
