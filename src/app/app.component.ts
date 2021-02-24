import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute, Data, NavigationEnd, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, map, mergeMap, shareReplay } from "rxjs/operators";
import { ISettingsState } from "./store/settings/state";
import { fromCart } from "./store/cart/state/index";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public data$: Observable<Data>;
  public toolbarId$: Observable<string>;
  public showToolbar$: Observable<boolean>;
  public cartQuantity$: Observable<number>;

  constructor(private store: Store<ISettingsState>, private router: Router, private route: ActivatedRoute) {
    this.data$ = this.router.events.pipe(
      shareReplay(),
      filter((data) => data instanceof NavigationEnd),
      map(() => this.route),
      map((data: ActivatedRoute) => (data.firstChild ? data.firstChild : route)),
      mergeMap((data: ActivatedRoute) => data.data)
    );

    this.toolbarId$ = this.data$.pipe(map((data) => data.toolbarId));
    this.showToolbar$ = this.data$.pipe(map((data) => data.showToolbar));
    this.cartQuantity$ = this.store.select(fromCart.getCartQuantity);
  }

  public onToolbarClicked(toolbarId: string): void {
    this.router.navigate(["/" + toolbarId]);
  }
}
