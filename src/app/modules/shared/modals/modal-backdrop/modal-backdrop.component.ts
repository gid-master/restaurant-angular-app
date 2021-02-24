import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { IModal } from "src/app/store/settings/interfaces/modal.interface";
import { settingsActions, fromSettings, ISettingsState } from "src/app/store/settings/state";

@Component({
  selector: "app-modal-backdrop",
  templateUrl: "./modal-backdrop.component.html",
  styleUrls: ["./modal-backdrop.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalBackdropComponent {
  public showModal$: Observable<boolean>;
  private disableClick: boolean;

  constructor(private store: Store<ISettingsState>) {
    this.showModal$ = this.store.select(fromSettings.getModal).pipe(
      filter((modal: IModal) => Boolean(modal)),
      tap((modal: IModal) => (this.disableClick = modal.disableClick)),
      tap((modal: IModal) => this.disableScroll(modal.show)),
      map((modal: IModal) => modal && modal.show)
    );
  }

  public onBackdropClicked(): void {
    if (this.disableClick) {
      return;
    }

    this.store.dispatch(new settingsActions.ShowModal({ show: false }));
  }

  private disableScroll(disable: boolean): void {
    document.body.style.overflow = disable ? "hidden" : "auto";
  }
}
