import { TOGGLE_MODE } from "constants";
import axios from "axios";

export const toggleMode = () => {
  return async (dispatch, getState) => {
    try {
      const {
        mode: { darkMode },
      } = getState();
      await axios.post("/api/mode", { darkMode });
      dispatch({ type: TOGGLE_MODE });
    } catch (err) {
      console.log(err);
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
      console.log(darkMode)
      if (prevDarkMode !== darkMode) dispatch({ type: TOGGLE_MODE });
    } catch (err) {
      console.log(err);
    }
  };
};
