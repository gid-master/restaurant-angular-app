import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PwaRefreshComponent } from "./pwa-refresh.component";

describe("PwaRefreshComponent", () => {
  let component: PwaRefreshComponent;
  let fixture: ComponentFixture<PwaRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
