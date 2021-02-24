import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IAuthentication } from "../../interfaces/login.interface";

@Component({
  selector: "app-login-create-account",
  templateUrl: "./login-create-account.component.html",
  styleUrls: ["./login-create-account.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginCreateAccountComponent implements OnInit {
  @Input() processing: boolean;
  @Input() error: string;
  @Output() enableRegisterClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submitClicked: EventEmitter<IAuthentication> = new EventEmitter<IAuthentication>();

  public formGroup: FormGroup;
  public readonly CONTROL_FORM = {
    NAME: "name",
    EMAIL: "email",
    PASSWORD: "password",
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      [this.CONTROL_FORM.NAME]: [null, [Validators.required]],
      [this.CONTROL_FORM.EMAIL]: [null, [Validators.required, Validators.email]],
      [this.CONTROL_FORM.PASSWORD]: [null, [Validators.required]],
    });
  }

  public onSubmit(): void {
    Object.keys(this.CONTROL_FORM).forEach((key) => {
      this.formGroup.get(this.CONTROL_FORM[key]).markAsDirty();
    });

    if (this.formGroup.invalid) {
      return;
    }

    const authentication: IAuthentication = {
      name: this.formGroup.get(this.CONTROL_FORM.NAME).value,
      email: this.formGroup.get(this.CONTROL_FORM.EMAIL).value,
      password: this.formGroup.get(this.CONTROL_FORM.PASSWORD).value,
    };

    this.submitClicked.emit(authentication);
  }
}
