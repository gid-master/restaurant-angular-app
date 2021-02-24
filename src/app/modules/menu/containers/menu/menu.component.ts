import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IProduct } from "src/app/store/product/interfaces/product.interface";
import { IProductState, fromProduct, productActions } from "src/app/store/product/state";
import { settingsActions } from "src/app/store/settings/state";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  public searchTerm$: Observable<string>;
  public sortId$: Observable<string>;
  public filterId$: Observable<string>;
  public products$: Observable<IProduct[]>;
  public categories: string[] = ["salads", "snacks", "meals", "burgers", "drinks", "dessert"];

  constructor(private store: Store<IProductState>, private router: Router) {
    this.searchTerm$ = this.store.select(fromProduct.getSearchTerm);
    this.sortId$ = this.store.select(fromProduct.getSortId);
    this.filterId$ = this.store.select(fromProduct.getFilterId);
    this.products$ = this.store.select(fromProduct.getProducts);
  }

  public onSearchChanged(search: string): void {
    this.store.dispatch(new productActions.SetTermSearch(search));
  }

  public onFilterClicked(filter: string): void {
    this.store.dispatch(new productActions.SetFilter(filter));
  }

  public onSortOpenClicked(): void {
    this.store.dispatch(new settingsActions.ShowModal({ show: true }));
  }

  public onSortClicked(sort: string): void {
    this.store.dispatch(new productActions.SetSort(sort));
    this.store.dispatch(new settingsActions.ShowModal({ show: false }));
  }

  public onProductClicked(productSku: string): void {
    this.router.navigate(["/product/", productSku]);
    // this.store.dispatch(new settingsActions.ShowModal({ show: true }));
  }
}
