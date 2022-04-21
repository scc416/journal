import axios from "axios";
import { RECEIVE_USER } from "constants";

export const getCurrentUsers = () => {
  return async (dispatch) => {
    try {
      const { data: username } = await axios.get("/api/users");
      dispatch({ type: RECEIVE_USER, username });
    } catch (e) {
      console.log(e);
    }
  };
};
