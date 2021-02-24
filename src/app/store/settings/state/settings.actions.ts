import { Action } from "@ngrx/store";
import { IModal } from "../interfaces/modal.interface";

export enum SettingsActionTypes {
  SHOW_SNACKBAR = "[Settings] Show Snackbar",
  SHOW_MODAL = "[Settings] Show Modal",
  SHOW_INSTALL = "[Settings] Show Install",
}

export class ShowSnackbar implements Action {
  readonly type = SettingsActionTypes.SHOW_SNACKBAR;
  constructor(public payload: string) {}
}

export class ShowModal implements Action {
  readonly type = SettingsActionTypes.SHOW_MODAL;
  constructor(public payload: IModal) {}
}

export class ShowInstall implements Action {
  readonly type = SettingsActionTypes.SHOW_INSTALL;
  constructor(public payload: boolean) {}
}

export type SettingsAction = ShowSnackbar | ShowModal | ShowInstall;
