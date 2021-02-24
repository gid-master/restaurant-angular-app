import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ISettingsState, SETTINGS_FEATURE_KEY } from "./settings.state";
import { IModal } from "../interfaces/modal.interface";

const getSettingsState = createFeatureSelector<ISettingsState>(SETTINGS_FEATURE_KEY);

export const getSnackbar = createSelector<object, ISettingsState, string>(getSettingsState, (state) => state.snackbar);
export const getModal = createSelector<object, ISettingsState, IModal>(getSettingsState, (state) => state.modal);
export const getShowInstall = createSelector<object, ISettingsState, boolean>(getSettingsState, (state) => state.showInstall);
