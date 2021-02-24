import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IProduct } from "src/app/store/product/interfaces/product.interface";
import { fromProduct, IProductState } from "src/app/store/product/state";
import { settingsActions } from "src/app/store/settings/state";
import { IUser } from "src/app/store/user/interfaces/user.interface";
import { fromUser } from "src/app/store/user/state";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public promotions$: Observable<IProduct[]>;
  public suggestions$: Observable<IProduct[]>;
  public offers$: Observable<IProduct[]>;
  public user$: Observable<IUser>;

  constructor(private store: Store<IProductState>, private router: Router) {
    this.promotions$ = this.store.select(fromProduct.getPromotions);
    this.suggestions$ = this.store.select(fromProduct.getSuggestions);
    this.offers$ = this.store.select(fromProduct.getOffers);
    this.user$ = this.store.select(fromUser.getUser);
  }

  public onSeeMoreClicked(): void {
    this.router.navigate(["/menu"]);
  }

  public onProductClicked(productSku: string): void {
    console.log(productSku);
  }

  public onShortcutClicked(option: string): void {
    switch (option) {
      case "account":
        this.router.navigate(["/account"]);
        break;
      case "menu":
        this.router.navigate(["/menu"]);
        break;
      case "install":
        this.store.dispatch(new settingsActions.ShowInstall(true));
        break;
      case "about":
        this.store.dispatch(new settingsActions.ShowModal({ show: true }));
        break;
    }
  }
}
