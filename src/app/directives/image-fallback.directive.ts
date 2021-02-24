import { Directive, Input, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "img[fallback]",
})
export class ImageFallbackDirective {
  @HostBinding()
  @Input()
  src: string;

  @HostListener("error")
  updateUrl() {
    this.src = "./assets/fallback.png";
  }
}
