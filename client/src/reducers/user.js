import { initUserState } from "constants";
import {
  RECEIVE_USER,
  UPDATE_LOGIN_INPUT,
  CLEAR_LOGIN_INPUT,
  CLEAR_REGISTER_INPUT,
} from "constants";

const userReducer = (state = initUserState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, username: action.username };
    case UPDATE_LOGIN_INPUT:
      const login = state.login
        ? { ...state.login, [action.key]: action.value }
        : { [action.key]: action.value };
      return { ...state, login };
    case CLEAR_LOGIN_INPUT:
      return { ...state, login: null };
    case CLEAR_REGISTER_INPUT:
      return { ...state, register: null };
    default:
      return state;
  }
};

export default userReducer;
