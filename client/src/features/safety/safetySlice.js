import { getAlarm } from "common/helpers";

const initState = { alarm: null, locked: true };

const LOCK = "safety/LOCK";
const UNLOCK = "safety/UNLOCK";

export const lock = { type: LOCK };
export const unlock = { type: UNLOCK };

const reducer = (state = initState, action) => {
  const { locked } = state;
  switch (action.type) {
    case LOCK:
      console.log("LINE 15");
      return { ...state, locked: true };
    case UNLOCK:
      console.log("LINE 18");
      return { ...state, locked: false, alarm: getAlarm() };
    default:
      console.log("LINE 21");
      if (locked) return state;
      console.log("LINE 23");
      const newState = { ...state, alarm: getAlarm() };
      console.log("NEW STATE ALARM: ", newState.alarm);
      return newState;
  }
};

export default reducer;
