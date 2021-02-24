import { IUserState, initialState } from "./user.state";
import { UserAction, UserActionTypes } from "./user.actions";

export function userReducer(state: IUserState = initialState, action: UserAction): IUserState {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: action.payload ? true : false,
      };
    case UserActionTypes.LOGOUT_USER:
      return {
        ...state,
        authenticated: null,
      };

    case UserActionTypes.PUSH_PERMISSION:
      return {
        ...state,
        pushPermission: action.payload,
      };

    default:
      return state;
  }
}
