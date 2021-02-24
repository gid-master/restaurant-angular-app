import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-menu-sort",
  templateUrl: "./menu-sort.component.html",
  styleUrls: ["./menu-sort.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSortComponent {
  @Input() sortId: string;
  @Output() sortClicked: EventEmitter<string> = new EventEmitter<string>();
}
