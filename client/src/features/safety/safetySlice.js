import { getAlarm } from "common/helpers";

const initState = { alarm: null, locked: true };

const LOCK = "safety/LOCK";
const UNLOCK = "safety/UNLOCK";
const UPDATE_ALARM = "safety/UPDATE_ALARM";

export const lock = { type: LOCK };
export const unlock = { type: UNLOCK };
export const updateAlarm = { type: UPDATE_ALARM };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOCK:
      return { ...state, locked: true };
    case UNLOCK:
      return { ...state, locked: false, alarm: getAlarm() };
    case UPDATE_ALARM:
      const { locked } = state;
      if (locked) return state;
      return { ...state, alarm: getAlarm() };
    default:
      return state;
  }
};

export default reducer;
