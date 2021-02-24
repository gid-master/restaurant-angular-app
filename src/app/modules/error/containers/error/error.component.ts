import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  public errorStatus$: Observable<string>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.errorStatus$ = this.route.params.pipe(map((params) => params.id.toString()));
  }

  public onGoBackClicked(): void {
    this.router.navigate(["/"]);
  }
}
