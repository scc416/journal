import { getAlarm, getNow } from "common/helpers";
import sanitizeDraftText from "draft-js/lib/sanitizeDraftText";

const initState = { alarm: null, locked: true };

const LOCK = "safety/LOCK";

export const lock = { type: LOCK };

const reducer = (state = initState, action) => {
  const { locked } = state;
  switch (action.type) {
    case LOCK:
      return { ...state, locked: true };
  }
  if (locked) return state;
  return { ...state, alarm: getAlarm() };
};

export default reducer;
