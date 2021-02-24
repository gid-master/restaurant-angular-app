import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IResponse } from "src/app/interfaces/response.interface";
import { IUser } from "../interfaces/user.interface";
import { StorageService } from "src/app/services/storage.service";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient, private storageService: StorageService) {}

  public authenticate(): Observable<IResponse<IUser>> {
    return this.http.get<IResponse<IUser>>("user/authenticate");
  }

  public logout(): void {
    this.storageService.removeCookieItem("authentication");
  }

  public pushPermission(pushPermission: string): Observable<IResponse<boolean>> {
    return this.http.post<IResponse<boolean>>("user/push", pushPermission);
  }
}
