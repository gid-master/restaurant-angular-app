import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./containers/product/product.component";
import { ProductAdditionalComponent } from "./components/product-additional/product-additional.component";
import { ProductAddToCartComponent } from "./components/product-add-to-cart/product-add-to-cart.component";
import { ProductCommentsComponent } from "./components/product-comments/product-comments.component";
import { ProductHeaderComponent } from "./components/product-header/product-header.component";
import { ProductIngredientsComponent } from "./components/product-ingredients/product-ingredients.component";
import { ProductMacroComponent } from "./components/product-macro/product-macro.component";
import { ProductReviewComponent } from "./components/product-review/product-review.component";
import { SharedModule } from "../shared/shared.module";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  declarations: [
    ProductComponent,
    ProductAdditionalComponent,
    ProductAddToCartComponent,
    ProductCommentsComponent,
    ProductHeaderComponent,
    ProductIngredientsComponent,
    ProductMacroComponent,
    ProductReviewComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, SharedModule, PipesModule],
})
export class ProductModule {}
