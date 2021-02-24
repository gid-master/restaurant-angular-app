import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccountOrderAccordionComponent } from "./account-order-accordion.component";

describe("AccountOrderAccordionComponent", () => {
  let component: AccountOrderAccordionComponent;
  let fixture: ComponentFixture<AccountOrderAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOrderAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOrderAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
