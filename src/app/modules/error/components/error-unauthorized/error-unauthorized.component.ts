import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-error-unauthorized",
  templateUrl: "./error-unauthorized.component.html",
  styleUrls: ["./error-unauthorized.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorUnauthorizedComponent {}
