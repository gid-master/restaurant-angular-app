import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ModalSnackbarComponent } from "./modal-snackbar.component";

describe("ModalSnackbarComponent", () => {
  let component: ModalSnackbarComponent;
  let fixture: ComponentFixture<ModalSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSnackbarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
