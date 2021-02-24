import { UserEffects } from "./user/state/user.effects";
import { ProductEffects } from "./product/state/product.effects";
import { CartEffects } from "./cart/state/cart.effects";

// List of all effetcs that belong to root level state
export const APP_STATES_EFFECTS = [UserEffects, ProductEffects, CartEffects];
