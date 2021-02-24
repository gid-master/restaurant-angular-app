import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { combineLatest, Observable } from "rxjs";
import { map, tap, shareReplay } from "rxjs/operators";
import { IProduct, IProductAdditionalIncrement } from "src/app/store/product/interfaces/product.interface";
import { fromProduct, IProductState, productActions } from "src/app/store/product/state";
import { cartActions } from "src/app/store/cart/state";
import { RandomService } from "src/app/services/random.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  public fromCategories$: Observable<IProduct[]>;
  public productSku$: Observable<string>;
  public cartId$: Observable<string>;
  public product$: Observable<IProduct>;
  public total$: Observable<number>;

  public cartId: string;

  constructor(
    private store: Store<IProductState>,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private randomService: RandomService
  ) {
    this.fromCategories$ = this.store.select(fromProduct.getFromCategories);
    this.productSku$ = this.route.params.pipe(map((params: Params) => (params.id ? params.id : null)));
    this.cartId$ = this.route.queryParams.pipe(map((params: Params) => (params.edit ? params.edit : null)));
    this.product$ = this.store.select(fromProduct.getPreferredProduct);
    this.total$ = this.store.select(fromProduct.getPreferredProductTotal);

    combineLatest(this.productSku$, this.cartId$)
      .pipe(
        shareReplay(),
        tap(([productSku, cartId]) => {
          this.cartId = cartId;
          this.store.dispatch(new productActions.SetPreferredProduct({ productSku, cartId }));
        })
      )
      .subscribe();
  }

  public onBackClicked(): void {
    this.location.back();
  }

  public onIncrementClicked(data: IProductAdditionalIncrement): void {
    this.store.dispatch(new productActions.SetProductAdditionalIncrement(data));
  }

  public onCommentsChanged(comments: string): void {
    this.store.dispatch(new productActions.SetProductComments(comments));
  }

  public onProductIncrementClicked(increment: number): void {
    this.store.dispatch(new productActions.SetProductQuantity(increment));
  }

  public onAddClicked(product: IProduct, id: string): void {
    id = id ? id : this.randomService.getUid();
    this.store.dispatch(new cartActions.SetCart({ id, product }));
    this.router.navigate(["/checkout"]);
  }

  public onProductClicked(productSku: string): void {
    this.router.navigate(["/product/", productSku]);
  }
}
