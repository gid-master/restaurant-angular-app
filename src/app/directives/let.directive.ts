import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

interface NgLetContext<TData> {
  $implicit: TData;
  ngLet: TData;
}

@Directive({
  selector: "[ngLet]",
})
export class LetDirective<TData> {
  private context: NgLetContext<TData> = {
    $implicit: null,
    ngLet: null,
  };

  @Input()
  set ngLet(value: TData) {
    this.context.$implicit = this.context.ngLet = value;
    this.createOrClearView(value);
  }

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<NgLetContext<TData>>) {}

  createOrClearView(value: TData) {
    // Create dom element event if let is null
    if (this.viewContainerRef.length === 0) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    }

    // if you want to ignore null element, then you can use this block
    // but doesn't make sense considering you can use ngIf for it
    // if (value !== null && this.viewContainerRef.length === 0) {
    //   this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    // } else if (value === null && this.viewContainerRef.length === 1) {
    //   this.viewContainerRef.clear();
    // }
  }
}
