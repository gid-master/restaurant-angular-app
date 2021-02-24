import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState, USER_FEATURE_KEY } from "./user.state";
import { IUser } from "../interfaces/user.interface";

const getUserState = createFeatureSelector<IUserState>(USER_FEATURE_KEY);

export const getUser = createSelector<object, IUserState, IUser>(getUserState, (state) => state.user);
export const getIsAuthenticated = createSelector<object, IUserState, boolean>(getUserState, (state) => state.authenticated);
