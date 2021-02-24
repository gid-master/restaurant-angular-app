import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CheckoutActionComponent } from "./checkout-action.component";

describe("CheckoutActionComponent", () => {
  let component: CheckoutActionComponent;
  let fixture: ComponentFixture<CheckoutActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
