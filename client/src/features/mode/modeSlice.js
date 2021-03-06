import axios from "axios";
import { displayError } from "features/error/errorSlice";

export const TOGGLE_MODE = "mode/TOGGLE_MODE";

const initState = true;

export const toggleMode = () => {
  return async (dispatch, getState) => {
    try {
      const { mode: darkMode } = getState();
      const { data } = await axios.post("/api/mode", { darkMode });
      if (data !== darkMode) dispatch({ type: TOGGLE_MODE });
    } catch (e) {
      dispatch(displayError(e.response.data));
    }
  };
};

export const getMode = () => {
  return async (dispatch, getState) => {
    try {
      const { mode: prevDarkMode } = getState();
      const { data: darkMode } = await axios.get("/api/mode");
      if (prevDarkMode !== darkMode) dispatch({ type: TOGGLE_MODE });
    } catch (e) {
      dispatch(displayError(e.response.data));
    }
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_MODE:
      return !state;
    default:
      return state;
  }
};

export default reducer;
