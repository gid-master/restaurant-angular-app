import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-menu-empty",
  templateUrl: "./menu-empty.component.html",
  styleUrls: ["./menu-empty.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuEmptyComponent {}
