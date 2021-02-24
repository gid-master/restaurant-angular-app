import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-button-badge",
  templateUrl: "./button-badge.component.html",
  styleUrls: ["./button-badge.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonBadgeComponent {
  @Input() name: string;
  @Input() icon: string;
  @Input() selected: boolean;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
}
