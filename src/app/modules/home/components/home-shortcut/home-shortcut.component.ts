import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-home-shortcut",
  templateUrl: "./home-shortcut.component.html",
  styleUrls: ["./home-shortcut.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeShortcutComponent {
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
}
