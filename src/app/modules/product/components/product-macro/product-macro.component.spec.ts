import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductMacroComponent } from "./product-macro.component";

describe("ProductMacroComponent", () => {
  let component: ProductMacroComponent;
  let fixture: ComponentFixture<ProductMacroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMacroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMacroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
