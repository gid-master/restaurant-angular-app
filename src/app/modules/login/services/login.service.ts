import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IResponse } from "src/app/interfaces/response.interface";
import { IUserAuthenticated, IAuthentication } from "../interfaces/login.interface";
import { StorageService } from "src/app/services/storage.service";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private storageService: StorageService) {}

  public register(authentication: IAuthentication): Observable<IResponse<IUserAuthenticated>> {
    return this.http.post<IResponse<IUserAuthenticated>>("user/register", authentication).pipe(
      tap((response: IResponse<IUserAuthenticated>) => {
        if (response.success) {
          this.storageService.setCookieItem("authentication", response.data.token);
        }
      })
    );
  }

  public login(authentication: IAuthentication): Observable<IResponse<IUserAuthenticated>> {
    return this.http.post<IResponse<IUserAuthenticated>>("user/login", authentication).pipe(
      tap((response: IResponse<IUserAuthenticated>) => {
        if (response.success) {
          this.storageService.setCookieItem("authentication", response.data.token);
        }
      })
    );
  }

  public logout(): void {
    this.storageService.removeCookieItem("authentication");
  }
}
