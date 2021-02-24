import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeShortcutComponent } from "./home-shortcut.component";

describe("HomeShortcutComponent", () => {
  let component: HomeShortcutComponent;
  let fixture: ComponentFixture<HomeShortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeShortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
