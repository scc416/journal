import axios from "axios";
import { displayError } from "features/error/errorSlice";

const RECEIVE_USER = "user/RECEIVE_USER";
const initState = null;

export const getCurrentUser = () => {
  return async (dispatch) => {
    try {
      const { data: username } = await axios.get("/api/users");
      dispatch({ type: RECEIVE_USER, payload: { username } });
    } catch (e) {
      dispatch(displayError(e.response.data));
      dispatch({ type: RECEIVE_USER, payload: { username: null } });
    }
  };
};

export const logIn = (id, password, fn) => {
  return async (dispatch) => {
    try {
      const { data: username } = await axios.post("/api/users", {
        username: id,
        password,
      });
      dispatch({ type: RECEIVE_USER, payload: { username } });
    } catch (e) {
      dispatch(displayError(e.response.data));
    }
    fn();
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const { data: username } = await axios.post("/api/users/logout");
      dispatch({ type: RECEIVE_USER, payload: { username } });
    } catch (e) {
      dispatch(displayError(e.response.data));
    }
  };
};

export const register = (id, password, confirmPassword, fn) => {
  return async (dispatch) => {
    try {
      const result = await axios.post("/api/users/register", {
        username: id,
        password,
        confirmPassword,
      });
      const { data: username } = result;
      dispatch({ type: RECEIVE_USER, payload: { username } });
    } catch (e) {
      dispatch(displayError(e.response.data));
    }
    fn();
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      const {
        payload: { username },
      } = action;
      if (!username) return "";
      return username;
    default:
      return state;
  }
};

export default reducer;
