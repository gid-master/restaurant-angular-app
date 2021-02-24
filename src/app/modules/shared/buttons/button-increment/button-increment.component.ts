import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-button-increment",
  templateUrl: "./button-increment.component.html",
  styleUrls: ["./button-increment.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIncrementComponent {
  @Input() disabledMin: boolean;
  @Input() disabledMax: boolean;
  @Input() quantity: number;
  @Input() large: boolean;
  @Output() incrementClicked: EventEmitter<number> = new EventEmitter<number>();
}
