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
      return { ...state, locked: true };
    case UNLOCK:
      return { ...state, locked: false, alarm: getAlarm() };
  }
  console.log("SAFELY AFTER SWITCH")
  if (locked) return state;
  return { ...state, alarm: getAlarm() };
};

export default reducer;
