import { HostListener, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class ConnectionService {
  private connected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(navigator && navigator.onLine);

  public isOnline(): Observable<boolean> {
    return this.connected.asObservable();
  }

  @HostListener("window:online")
  online() {
    this.connected.next(true);
  }

  @HostListener("window:offline")
  offline() {
    this.connected.next(false);
  }
}
