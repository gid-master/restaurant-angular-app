import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class StorageService {
  constructor(private cookieService: CookieService) {}

  public setCookieItem<T>(key: string, value: T): void {
    this.cookieService.put(key, JSON.stringify(value));
  }

  public removeCookieItem(key: string): void {
    this.cookieService.remove(key);
  }

  public getCookieItem<T>(key: string): Observable<T> {
    const data = this.cookieService.get(key);
    return of(data ? (JSON.parse(data) as T) : null);
  }

  public setLocalStorageItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getLocalStorageItem<T>(key: string): Observable<T> {
    const data = localStorage.getItem(key);
    return of(data ? (JSON.parse(data) as T) : null);
  }

  public removeLocalStorageItem(key: string): void {
    localStorage.removeItem(key);
  }
}
