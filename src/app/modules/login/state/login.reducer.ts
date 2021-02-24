import { ILoginState, initialState } from "./login.state";
import { LoginActionTypes, LoginAction } from "./login.actions";

export function loginReducer(state: ILoginState = initialState, action: LoginAction): ILoginState {
  switch (action.type) {
    case LoginActionTypes.INITIALIZE:
      return {
        ...state,
        error: null,
        processing: false,
        user: null,
      };

    case LoginActionTypes.LOGIN_USER:
    case LoginActionTypes.REGISTER_USER:
      return {
        ...state,
        error: null,
        processing: true,
      };

    case LoginActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        processing: false,
      };

    case LoginActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        processing: false,
      };

    default:
      return state;
  }
}
