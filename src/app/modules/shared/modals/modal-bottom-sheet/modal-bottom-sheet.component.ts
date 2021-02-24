import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import { IModal } from "src/app/store/settings/interfaces/modal.interface";
import { fromSettings, ISettingsState } from "src/app/store/settings/state";

@Component({
  selector: "app-modal-bottom-sheet",
  templateUrl: "./modal-bottom-sheet.component.html",
  styleUrls: ["./modal-bottom-sheet.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalBottomSheetComponent {
  @Input() id: string;
  @Input() title: string;

  public showModal$: Observable<boolean>;

  constructor(private store: Store<ISettingsState>) {
    this.showModal$ = this.store.select(fromSettings.getModal).pipe(
      filter((modal: IModal) => Boolean(modal)),
      map((modal: IModal) => modal.show && modal.id === this.id)
    );
  }
}
