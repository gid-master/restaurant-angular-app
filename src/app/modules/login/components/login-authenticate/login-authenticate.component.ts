import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IAuthentication } from "../../interfaces/login.interface";

@Component({
  selector: "app-login-authenticate",
  templateUrl: "./login-authenticate.component.html",
  styleUrls: ["./login-authenticate.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginAuthenticateComponent implements OnInit, OnChanges {
  @Input() processing: boolean;
  @Input() error: string;
  @Output() enableRegisterClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submitClicked: EventEmitter<IAuthentication> = new EventEmitter<IAuthentication>();

  public formGroup: FormGroup;
  public readonly CONTROL_FORM = {
    EMAIL: "email",
    PASSWORD: "password",
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      [this.CONTROL_FORM.EMAIL]: [null, [Validators.required, Validators.email]],
      [this.CONTROL_FORM.PASSWORD]: [null, [Validators.required]],
    });
  }

  ngOnChanges({ processing }: SimpleChanges) {
    if (!this.formGroup) {
      return;
    }

    if (processing) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }

  public onSubmit(): void {
    Object.keys(this.CONTROL_FORM).forEach((key) => {
      this.formGroup.get(this.CONTROL_FORM[key]).markAsDirty();
    });

    if (this.formGroup.invalid) {
      return;
    }

    const authentication: IAuthentication = {
      email: this.formGroup.get(this.CONTROL_FORM.EMAIL).value,
      password: this.formGroup.get(this.CONTROL_FORM.PASSWORD).value,
    };

    this.submitClicked.emit(authentication);
  }
}
