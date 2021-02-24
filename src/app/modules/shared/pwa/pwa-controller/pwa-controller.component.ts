import { Component, OnInit, OnDestroy, HostListener, ChangeDetectionStrategy } from "@angular/core";
import { SwPush, SwUpdate } from "@angular/service-worker";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { filter, tap } from "rxjs/operators";
import { EnvironmentService } from "src/app/services/environment.service";
import { fromSettings, ISettingsState, settingsActions } from "src/app/store/settings/state";
import { userActions } from "src/app/store/user/state";

@Component({
  selector: "app-pwa-controller",
  templateUrl: "./pwa-controller.component.html",
  styleUrls: ["./pwa-controller.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PwaControllerComponent implements OnInit, OnDestroy {
  public deferredPrompt: any;

  public ios = false;
  public developmentMode = false;
  public installed = false;

  public installSubscription: Subscription;
  public updateSubscription: Subscription;

  constructor(private store: Store<ISettingsState>, private environmentService: EnvironmentService, private updates: SwUpdate, private swPush: SwPush) {
    this.ios = this.environmentService.isIOS();
    this.developmentMode = this.environmentService.isDevelopmentMode();
    this.installed = this.environmentService.isApplicationInstalled();
  }

  ngOnInit(): void {
    // Initialize the application and notify the user if i't in offline mode
    if (this.environmentService.isOffline()) {
      this.store.dispatch(new settingsActions.ShowSnackbar("No internet connection found. But the applicaiton can be used in offline mode"));
    }

    // listen to the install request and display the modal to the user
    this.installSubscription = this.store
      .select(fromSettings.getShowInstall)
      .pipe(
        filter((show: boolean) => show),
        tap(() => {
          this.store.dispatch(new settingsActions.ShowModal({ id: "install-modal", show: true }));
          this.store.dispatch(new settingsActions.ShowInstall(false));
        })
      )
      .subscribe();

    // listen to service worker updates and display the modal
    if (this.updates.isEnabled) {
      this.updateSubscription = this.updates.available.subscribe(() => {
        console.log("updating screen");
        this.store.dispatch(new settingsActions.ShowModal({ id: "refresh-modal", show: true }));
      });
    }

    // subscribe to push notification
    if (this.swPush.isEnabled) {
      this.swPush
        .requestSubscription({
          serverPublicKey: this.environmentService.vapIdKey(),
        })
        .then((sub) => this.store.dispatch(new userActions.PushPermission(JSON.stringify(sub))))
        .catch(() => this.store.dispatch(new settingsActions.ShowSnackbar("Error trying to subscribe to notifications")));
    }
  }

  ngOnDestroy(): void {
    this.installSubscription.unsubscribe();
    this.updateSubscription.unsubscribe();
  }

  @HostListener("window:beforeinstallprompt", ["$event"])
  onbeforeinstallprompt(event: Event) {
    event.preventDefault();
    this.deferredPrompt = event;
  }

  @HostListener("window:online")
  online() {
    this.store.dispatch(new settingsActions.ShowSnackbar("Woop, you're back online again"));
  }

  @HostListener("window:offline")
  offline() {
    this.store.dispatch(new settingsActions.ShowSnackbar("Ops, You're currently offline"));
  }

  public async onInstallClicked() {
    if (!this.deferredPrompt) {
      return;
    }

    this.deferredPrompt.prompt();
    await this.deferredPrompt.userChoise;
    this.deferredPrompt = null;

    this.store.dispatch(new settingsActions.ShowModal({ show: false }));
  }

  public async onRefreshClicked() {
    this.store.dispatch(new settingsActions.ShowModal({ show: false }));
    await this.updates.activateUpdate();
    setTimeout(() => document.location.reload(), 1000);
  }
}

// test message
// {"notification": {"title":"Restaurant","icon":"assets/icons/pwa/favicon-32x32.png","vibrate":[100, 50, 100],"body":"testing!!!"}}
