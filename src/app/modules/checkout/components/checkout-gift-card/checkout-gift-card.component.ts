import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-checkout-gift-card",
  templateUrl: "./checkout-gift-card.component.html",
  styleUrls: ["./checkout-gift-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutGiftCardComponent implements OnInit, OnDestroy {
  @Input() disabled: boolean;
  @Output() formChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() formSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild("form", { static: false }) form: NgForm;

  public formSubscription: Subscription;
  public formGroup: FormGroup;
  public readonly CONTROL_FORM = {
    GIFT_CARD: "giftCard",
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      [this.CONTROL_FORM.GIFT_CARD]: [null, [Validators.required]],
    });

    this.formSubscription = this.formGroup.valueChanges.subscribe((data) => {
      this.formChanged.emit(data[this.CONTROL_FORM.GIFT_CARD]);
    });
  }

  public submit(): void {
    this.form.ngSubmit.emit();
  }

  public reset(): void {
    this.formGroup.reset();
  }

  public onSubmit(): void {
    this.formGroup.get(this.CONTROL_FORM.GIFT_CARD).markAsDirty();

    if (this.formGroup.invalid) {
      return;
    }

    this.formSubmitted.emit();
  }
}
