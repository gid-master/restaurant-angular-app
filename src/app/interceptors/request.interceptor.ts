import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { StorageService } from "src/app/services/storage.service";
import { environment } from "src/environments/environment";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.storageService.getCookieItem("authentication").pipe(
      switchMap((token: string) => {
        request = request.clone({
          // withCredentials: true,
          url: environment.api + request.url,
          setHeaders: {
            // Accept: 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            "Cache-Control": "max-age=0, no-cache",
            Authorization: token ? `Bearer ${token}` : null,
          },
        });
        return next.handle(request);
      })
    );
  }
}
