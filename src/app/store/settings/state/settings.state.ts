import { IModal } from "../interfaces/modal.interface";

export const SETTINGS_FEATURE_KEY = "settings";

export interface ISettingsState {
  snackbar: string;
  modal: IModal;
  showInstall: boolean;
}

export const initialState: ISettingsState = {
  snackbar: null,
  modal: null,
  showInstall: null,
};
