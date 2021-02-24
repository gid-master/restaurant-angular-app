import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeShortcutButtonComponent } from "./home-shortcut-button.component";

describe("HomeShortcutButtonComponent", () => {
  let component: HomeShortcutButtonComponent;
  let fixture: ComponentFixture<HomeShortcutButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeShortcutButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShortcutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
