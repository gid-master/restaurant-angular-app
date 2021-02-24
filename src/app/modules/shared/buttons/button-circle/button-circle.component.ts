import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-button-circle",
  templateUrl: "./button-circle.component.html",
  styleUrls: ["./button-circle.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCircleComponent {
  @Input() name: string;
  @Input() icon: string;
  @Input() selected: boolean;
  @Input() horizontal: boolean;
  @Input() small: boolean;
  @Input() light: boolean;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
}
