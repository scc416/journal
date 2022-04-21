import { TOGGLE_MODE } from "constants";
import axios from "axios";

export const toggleMode = () => {
  return async (dispatch, getState) => {
    try {
      const {
        mode: { darkMode },
      } = getState();
      console.log("TOGGLE MODE");
      const { data } = await axios.post("/api/mode", { darkMode: !darkMode });
      console.log(data);
      dispatch({ type: TOGGLE_MODE });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getMode = () => {
  return async (dispatch, getState) => {
    try {
      const {
        mode: { darkMode: prevDarkMode },
      } = getState();
      const { data: darkMode } = await axios.get("/api/mode");
      if (prevDarkMode !== darkMode) dispatch({ type: TOGGLE_MODE });
    } catch (e) {
      console.log(e);
    }
  };
};
