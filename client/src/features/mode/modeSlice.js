import { initModeState, TOGGLE_MODE } from "constants";

const modeReducer = (state = initModeState, action) => {
  switch (action.type) {
    case TOGGLE_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default modeReducer;
