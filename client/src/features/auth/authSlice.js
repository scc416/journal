import axios from "axios";
import { displayError } from "features/error/errorSlice";

const RECEIVE_USER = "user/RECEIVE_USER";
const initState = {};

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

export const logIn = (id, password) => {
  return async (dispatch) => {
    try {
      const { data: username } = await axios.post("/api/users", {
        username: id,
        password,
      });
      console.log(username);
      dispatch({ type: RECEIVE_USER, payload: { username } });
    } catch (e) {
      dispatch(displayError(e.response.data));
    }
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

export const register = (id, password, confirmPassword) => {
  return async (dispatch) => {
    try {
      const result = await axios.post("/api/users/register", {
        username: id,
        password,
        confirmPassword,
      });
      console.log(result);
      const { data: username } = result;
      dispatch({ type: RECEIVE_USER, payload: { username } });
    } catch (e) {
      dispatch(displayError(e.response.data));
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
