import { USER_FEATURE_KEY, IUserState } from "./user/state/user.state";
import { PRODUCT_FEATURE_KEY, IProductState } from "./product/state/product.state";
import { SETTINGS_FEATURE_KEY, ISettingsState } from "./settings/state/settings.state";
import { CART_FEATURE_KEY, ICartState } from "./cart/state/cart.state";

export interface AppStates {
  [USER_FEATURE_KEY]: IUserState;
  [PRODUCT_FEATURE_KEY]: IProductState;
  [SETTINGS_FEATURE_KEY]: ISettingsState;
  [CART_FEATURE_KEY]: ICartState;
}
