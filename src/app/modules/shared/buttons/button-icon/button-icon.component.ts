import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-button-icon",
  templateUrl: "./button-icon.component.html",
  styleUrls: ["./button-icon.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIconComponent {
  @Input() name: string;
  @Input() icon: string;
  @Input() badge: number;
  @Input() selected: boolean;
  @Input() disabled: boolean;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
}
