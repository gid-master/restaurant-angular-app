import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { fromSettings, ISettingsState, settingsActions } from "src/app/store/settings/state";

@Component({
  selector: "app-modal-snackbar",
  templateUrl: "./modal-snackbar.component.html",
  styleUrls: ["./modal-snackbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalSnackbarComponent {
  public showSnackbar$: Observable<string>;
  private duration = 5000;
  private timeout: number;
  private running: boolean;

  constructor(private store: Store<ISettingsState>) {
    this.showSnackbar$ = this.store.select(fromSettings.getSnackbar).pipe(
      tap((data: string) => {
        if (data && !this.running) {
          this.delay();
        }
      })
    );
  }

  public onSnackbarClicked(): void {
    this.close();
  }

  private delay(): void {
    this.running = true;
    this.timeout = window.setTimeout(() => this.close(), this.duration);
  }

  private close(): void {
    this.running = false;
    window.clearTimeout(this.timeout);
    this.store.dispatch(new settingsActions.ShowSnackbar(null));
  }
}
