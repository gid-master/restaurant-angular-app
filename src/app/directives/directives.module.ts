import { NgModule } from "@angular/core";
import { ImageFallbackDirective } from "./image-fallback.directive";
import { LetDirective } from "./let.directive";

@NgModule({
  declarations: [LetDirective, ImageFallbackDirective],
  exports: [LetDirective, ImageFallbackDirective],
})
export class DirectivesModule {}
