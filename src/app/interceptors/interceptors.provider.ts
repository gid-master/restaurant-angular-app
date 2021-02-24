import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MockInterceptor } from "./mock.interceptor";
import { RequestInterceptor } from "./request.interceptor";
import { ErrorInterceptor } from "./error.interceptor";

// Interceptors are executed from top to bottom

export const INTERCEPTOR_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
