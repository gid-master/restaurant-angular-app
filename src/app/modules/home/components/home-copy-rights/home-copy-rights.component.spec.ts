import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeCopyRightsComponent } from "./home-copy-rights.component";

describe("HomeCopyRightsComponent", () => {
  let component: HomeCopyRightsComponent;
  let fixture: ComponentFixture<HomeCopyRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCopyRightsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCopyRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
