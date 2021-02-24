import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccountOrderCardComponent } from "./account-order-card.component";

describe("AccountOrderCardComponent", () => {
  let component: AccountOrderCardComponent;
  let fixture: ComponentFixture<AccountOrderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOrderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
