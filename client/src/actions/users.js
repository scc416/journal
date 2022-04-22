import axios from "axios";
import { RECEIVE_USER, UPDATE_LOGIN_INPUT } from "constants";

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

export const updateLoginDetails = (key, e) => {
  return { type: UPDATE_LOGIN_INPUT, key, value: e.target.value };
};
