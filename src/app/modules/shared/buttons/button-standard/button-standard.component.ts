import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-button-standard",
  templateUrl: "./button-standard.component.html",
  styleUrls: ["./button-standard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonStandardComponent {
  @Input() submit: boolean;
  @Input() icon: string;
  @Input() name: string;
  @Input() detail: string;
  @Input() center: boolean;
  @Input() disabled: boolean;
  @Input() small: boolean;
  @Input() transparent: boolean;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  public onButtonClicked(): void {
    if (this.submit) {
      return;
    }

    this.buttonClicked.emit();
  }
}
