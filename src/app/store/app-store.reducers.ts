import { ActionReducerMap } from "@ngrx/store";

import { AppStates } from "./app-store.state";
import { InjectionToken } from "@angular/core";

// USER
import { USER_FEATURE_KEY } from "./user/state/user.state";
import { userReducer } from "./user/state/user.reducer";

// PRODUCTS
import { PRODUCT_FEATURE_KEY } from "./product/state/product.state";
import { productReducer } from "./product/state/product.reducer";

// SETTINGS
import { SETTINGS_FEATURE_KEY } from "./settings/state/settings.state";
import { settingsReducer } from "./settings/state/settings.reducer";

// CART
import { CART_FEATURE_KEY } from "./cart/state/cart.state";
import { cartReducer } from "./cart/state/cart.reducer";

// List of all reducers that belong to root level state
export const reducers: ActionReducerMap<AppStates> = {
  [USER_FEATURE_KEY]: userReducer,
  [PRODUCT_FEATURE_KEY]: productReducer,
  [SETTINGS_FEATURE_KEY]: settingsReducer,
  [CART_FEATURE_KEY]: cartReducer,
};

export const APP_STATES_REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<AppStates>>("App Reducers");
export const reducerProvider = {
  provide: APP_STATES_REDUCERS_TOKEN,
  useValue: reducers,
};
