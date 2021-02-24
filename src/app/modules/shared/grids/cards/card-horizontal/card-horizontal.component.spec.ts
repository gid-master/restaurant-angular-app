import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardHorizontalComponent } from "./card-horizontal.component";

describe("CardHorizontalComponent", () => {
  let component: CardHorizontalComponent;
  let fixture: ComponentFixture<CardHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
