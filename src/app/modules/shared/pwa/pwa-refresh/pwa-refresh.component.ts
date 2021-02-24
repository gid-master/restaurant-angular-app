import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-pwa-refresh",
  templateUrl: "./pwa-refresh.component.html",
  styleUrls: ["./pwa-refresh.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PwaRefreshComponent {
  @Output() refreshClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
}
