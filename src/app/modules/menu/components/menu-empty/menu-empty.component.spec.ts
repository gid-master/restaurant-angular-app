import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuEmptyComponent } from "./menu-empty.component";

describe("MenuEmptyComponent", () => {
  let component: MenuEmptyComponent;
  let fixture: ComponentFixture<MenuEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
