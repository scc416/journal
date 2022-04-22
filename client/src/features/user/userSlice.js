import axios from "axios";

const initUserState = {
  login: null,
  register: null,
};

const RECEIVE_USER = "RECEIVE_USER";

export const getCurrentUsers = () => {
  return async (dispatch) => {
    try {
      const { data: username } = await axios.get("/api/users");
      dispatch({ type: RECEIVE_USER, username });
    } catch (err) {
      console.log(err);
    }
  };
};

const userReducer = (state = initUserState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, username: action.username };
    default:
      return state;
  }
};

export default userReducer;
