import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class EnvironmentService {
  public isIOS(): boolean {
    if (!navigator) {
      return false;
    }

    const devices: string[] = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"];
    const mac: boolean = navigator.userAgent.includes("Mac") && "ontouchend" in document;
    return devices.includes(navigator.platform) || mac;
  }

  public isApplicationInstalled(): boolean {
    return window.matchMedia("(display-mode: standalone)").matches;
  }

  public isDevelopmentMode(): boolean {
    return !environment.production;
  }

  public isOffline(): boolean {
    return navigator && !navigator.onLine;
  }

  public vapIdKey(): string {
    return environment.vapid;
  }
}
