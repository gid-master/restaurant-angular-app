import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICheckoutState, CHECKOUT_FEATURE_KEY } from "./checkout.state";

const getCheckoutState = createFeatureSelector<ICheckoutState>(CHECKOUT_FEATURE_KEY);

export const getProcessing = createSelector<object, ICheckoutState, boolean>(getCheckoutState, (state) => state.processing);
export const getProcessed = createSelector<object, ICheckoutState, boolean>(getCheckoutState, (state) => state.processed);
export const getError = createSelector<object, ICheckoutState, string>(getCheckoutState, (state) => state.error);
