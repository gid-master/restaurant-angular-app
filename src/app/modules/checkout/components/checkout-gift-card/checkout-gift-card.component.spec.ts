import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CheckoutGiftCardComponent } from "./checkout-gift-card.component";

describe("CheckoutGiftCardComponent", () => {
  let component: CheckoutGiftCardComponent;
  let fixture: ComponentFixture<CheckoutGiftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutGiftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
