import { Component, Input, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ICreditCard } from "../../interfaces/checkout.interface";

function creditCartValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (!control.value || control.value.toString().length <= 16) {
    return null;
  }
  return { creditCartValidator: true };
}

@Component({
  selector: "app-checkout-credit-card",
  templateUrl: "./checkout-credit-card.component.html",
  styleUrls: ["./checkout-credit-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutCreditCardComponent implements OnInit, OnDestroy {
  @Input() disabled: boolean;
  @Output() formChanged: EventEmitter<ICreditCard> = new EventEmitter<ICreditCard>();
  @Output() formSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild("form", { static: false }) form: NgForm;

  public formSubscription: Subscription;
  public formGroup: FormGroup;
  public readonly CONTROL_FORM = {
    NAME_HOLDER: "nameHolder",
    CARD_NUMBER: "cardNumber",
    CVV: "cvv",
    EXPIRATION: "expiration",
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      [this.CONTROL_FORM.NAME_HOLDER]: [null, [Validators.required]],
      [this.CONTROL_FORM.CARD_NUMBER]: [null, [Validators.required, creditCartValidator]],
      [this.CONTROL_FORM.CVV]: [null, [Validators.required]],
      [this.CONTROL_FORM.EXPIRATION]: [null, [Validators.required]],
    });

    this.formSubscription = this.formGroup.valueChanges.subscribe((data) => {
      this.formChanged.emit(data);
    });
  }

  public submit(): void {
    this.form.ngSubmit.emit();
  }

  public reset(): void {
    this.formGroup.reset();
  }

  public onSubmit(): void {
    Object.keys(this.CONTROL_FORM).forEach((key) => {
      this.formGroup.get(this.CONTROL_FORM[key]).markAsDirty();
    });

    if (this.formGroup.invalid) {
      return;
    }

    this.formSubmitted.emit();
  }
}
