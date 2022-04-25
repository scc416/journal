import { getAlarm } from "common/helpers";

const initState = { alarm: null, locked: true };

const LOCK = "safety/LOCK";
const UNLOCK = "safety/UNLOCK";
const UPDATE_ALARM = "safety/UPDATE_ALARM";

export const lock = { type: LOCK };
export const unlock = () => {
  return { type: UNLOCK, payload: { alarm: getAlarm() } };
};
export const updateAlarm = () => {
  return {
    type: UPDATE_ALARM,
    payload: { alarm: getAlarm() },
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOCK:
      return { ...state, locked: true };
    case UNLOCK:
      const {
        payload: { alarm },
      } = action;
      return { ...state, locked: false, alarm };
    case UPDATE_ALARM:
      const { locked } = state;
      if (locked) return state;
      const {
        payload: { alarm: newAlarm },
      } = action;

      return { ...state, alarm: newAlarm };
    default:
      return state;
  }
};

export default reducer;
