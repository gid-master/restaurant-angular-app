import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginAuthenticateComponent } from "./login-authenticate.component";

describe("LoginAuthenticateComponent", () => {
  let component: LoginAuthenticateComponent;
  let fixture: ComponentFixture<LoginAuthenticateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAuthenticateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAuthenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
