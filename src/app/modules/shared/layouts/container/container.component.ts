import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {
  @Input() title: string;
  @Input() link: string;
  @Output() linkClicked: EventEmitter<string> = new EventEmitter<string>();
}
