import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductAddToCartComponent } from "./product-add-to-cart.component";

describe("ProductAddToCartComponent", () => {
  let component: ProductAddToCartComponent;
  let fixture: ComponentFixture<ProductAddToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
