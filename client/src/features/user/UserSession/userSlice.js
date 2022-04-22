import { initUserState } from "constants";
import { RECEIVE_USER } from "constants";

const userReducer = (state = initUserState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, username: action.username };
    default:
      return state;
  }
};

export default userReducer;
