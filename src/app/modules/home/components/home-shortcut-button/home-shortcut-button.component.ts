import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-home-shortcut-button",
  templateUrl: "./home-shortcut-button.component.html",
  styleUrls: ["./home-shortcut-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeShortcutButtonComponent {
  @Input() name: string;
  @Input() icon: string;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
}
