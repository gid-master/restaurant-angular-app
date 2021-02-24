import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccountBioComponent } from "./account-bio.component";

describe("AccountBioComponent", () => {
  let component: AccountBioComponent;
  let fixture: ComponentFixture<AccountBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
