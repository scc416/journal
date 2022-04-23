import axios from "axios";
import { displayError } from "features/error/errorSlice";

const RECEIVE_USER = "user/RECEIVE_USER";
const initState = {};

export const getCurrentUser = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get("/api/users");
      const { data: username } = result;
      console.log(username, "LINE 12");
      dispatch({ type: RECEIVE_USER, payload: { username } });
    } catch (e) {
      dispatch(displayError(e.response.data));
      dispatch({ type: RECEIVE_USER, payload: { username: null } });
    }
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
};

export default reducer;
