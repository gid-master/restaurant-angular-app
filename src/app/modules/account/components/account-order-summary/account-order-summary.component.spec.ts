import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccountOrderSummaryComponent } from "./account-order-summary.component";

describe("AccountOrderSummaryComponent", () => {
  let component: AccountOrderSummaryComponent;
  let fixture: ComponentFixture<AccountOrderSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOrderSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
