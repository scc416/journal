import { initUserState } from "constants";
import { RECEIVE_USER } from "constants";

const userReducer = (state = initUserState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, id: action.id };
    default:
      return state;
  }
};

export default userReducer;
