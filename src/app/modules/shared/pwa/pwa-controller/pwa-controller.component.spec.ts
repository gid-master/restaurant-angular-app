import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PwaControllerComponent } from "./pwa-controller.component";

describe("PwaControllerComponent", () => {
  let component: PwaControllerComponent;
  let fixture: ComponentFixture<PwaControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
