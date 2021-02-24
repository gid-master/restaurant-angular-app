import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-error-unexpected",
  templateUrl: "./error-unexpected.component.html",
  styleUrls: ["./error-unexpected.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorUnexpectedComponent {}
