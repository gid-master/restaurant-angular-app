import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-menu-search",
  templateUrl: "./menu-search.component.html",
  styleUrls: ["./menu-search.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSearchComponent {
  @Input() searchTerm: string;
  @Input() sortId: string;
  @Output() searchChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() sortClicked: EventEmitter<string> = new EventEmitter<string>();
}
