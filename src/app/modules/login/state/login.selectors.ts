import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ILoginState, LOGIN_FEATURE_KEY } from "./login.state";
import { IUserAuthenticated } from "../interfaces/login.interface";

const getUserState = createFeatureSelector<ILoginState>(LOGIN_FEATURE_KEY);

export const getProcessing = createSelector<object, ILoginState, boolean>(getUserState, (state) => state.processing);
export const getError = createSelector<object, ILoginState, string>(getUserState, (state) => state.error);
export const getUserAuthenticated = createSelector<object, ILoginState, IUserAuthenticated>(getUserState, (state) => state.user);
