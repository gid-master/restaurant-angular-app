import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonBadgeComponent } from "./button-badge.component";

describe("ButtonBadgeComponent", () => {
  let component: ButtonBadgeComponent;
  let fixture: ComponentFixture<ButtonBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonBadgeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
