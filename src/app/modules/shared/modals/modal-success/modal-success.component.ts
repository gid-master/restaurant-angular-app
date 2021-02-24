import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { IModal } from "src/app/store/settings/interfaces/modal.interface";
import { fromSettings, ISettingsState } from "src/app/store/settings/state";

@Component({
  selector: "app-modal-success",
  templateUrl: "./modal-success.component.html",
  styleUrls: ["./modal-success.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalSuccessComponent {
  @Input() id: string;
  @Input() title: string;
  @Input() message: string;
  @Input() button: string;
  @Input() processed: boolean;
  @Output() modalClicked: EventEmitter<string> = new EventEmitter<string>();

  public showModal$: Observable<boolean>;

  constructor(private store: Store<ISettingsState>) {
    this.showModal$ = this.store.select(fromSettings.getModal).pipe(
      filter((modal: IModal) => Boolean(modal)),
      map((modal: IModal) => modal.show && modal.id === this.id)
    );
  }
}
