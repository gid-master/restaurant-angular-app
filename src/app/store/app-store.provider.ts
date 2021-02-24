import { AppStatesInitializer, initializeAppStates } from "./app-store.initializer";
import { reducerProvider } from "./app-store.reducers";
import { APP_INITIALIZER } from "@angular/core";

export const APP_STATES_PROVIDERS = [
  reducerProvider,
  {
    provide: APP_INITIALIZER,
    useFactory: initializeAppStates,
    multi: true,
    deps: [AppStatesInitializer],
  },
];
