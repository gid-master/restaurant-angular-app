import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-error-server",
  templateUrl: "./error-server.component.html",
  styleUrls: ["./error-server.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorServerComponent {}
