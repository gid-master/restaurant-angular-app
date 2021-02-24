import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-block",
  templateUrl: "./block.component.html",
  styleUrls: ["./block.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() link: string;
  @Output() linkClicked: EventEmitter<string> = new EventEmitter<string>();
}
