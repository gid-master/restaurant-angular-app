import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CheckoutEmptyComponent } from "./checkout-empty.component";

describe("CheckoutEmptyComponent", () => {
  let component: CheckoutEmptyComponent;
  let fixture: ComponentFixture<CheckoutEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
