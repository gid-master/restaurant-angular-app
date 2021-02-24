import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CheckoutCreditCardComponent } from "./checkout-credit-card.component";

describe("CheckoutCreditCardComponent", () => {
  let component: CheckoutCreditCardComponent;
  let fixture: ComponentFixture<CheckoutCreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCreditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
