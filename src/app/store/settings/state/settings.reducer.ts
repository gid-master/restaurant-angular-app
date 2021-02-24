import { ISettingsState, initialState } from "./settings.state";
import { SettingsAction, SettingsActionTypes } from "./settings.actions";

export function settingsReducer(state: ISettingsState = initialState, action: SettingsAction): ISettingsState {
  switch (action.type) {
    case SettingsActionTypes.SHOW_SNACKBAR:
      return {
        ...state,
        snackbar: action.payload,
      };

    case SettingsActionTypes.SHOW_MODAL:
      return {
        ...state,
        modal: action.payload,
      };

    case SettingsActionTypes.SHOW_INSTALL:
      return {
        ...state,
        showInstall: action.payload,
      };

    default:
      return state;
  }
}
