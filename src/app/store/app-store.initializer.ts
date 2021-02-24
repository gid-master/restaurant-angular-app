import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppStates } from "./app-store.state";

// Actions
import { userActions } from "./user/state";
import { productActions } from "./product/state";
import { cartActions } from "./cart/state";
import { fromProduct } from "./product/state/index";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AppStatesInitializer {
  constructor(private store: Store<AppStates>) {}

  // here we should dispatch all actions to initialize root states
  async initialize(): Promise<boolean> {
    this.store.dispatch(new userActions.AuthenticateUser());
    this.store.dispatch(new productActions.GetProducts());
    this.store.dispatch(new cartActions.LoadCart());

    return new Promise((resolve, reject) => {
      this.store
        .select(fromProduct.getInitialized)
        .pipe(filter((initialized: boolean) => initialized))
        .subscribe((data) => resolve(data));
    });
  }
}

// example of how to create an APP_INITIALIZER and hold the application until get whatever you want to be loaded
export function initializeAppStates(appInitializer: AppStatesInitializer): () => void {
  return () => appInitializer.initialize();
}
