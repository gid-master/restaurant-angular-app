import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardCoverComponent } from "./card-cover.component";

describe("CardCoverComponent", () => {
  let component: CardCoverComponent;
  let fixture: ComponentFixture<CardCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
