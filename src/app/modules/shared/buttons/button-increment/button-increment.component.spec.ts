import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonIncrementComponent } from "./button-increment.component";

describe("ButtonIncrementComponent", () => {
  let component: ButtonIncrementComponent;
  let fixture: ComponentFixture<ButtonIncrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonIncrementComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
