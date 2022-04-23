import axios from "axios";
import { convertToRaw } from "draft-js";
import { displayError } from "../error/errorSlice";

const initState = {};
const SAVE_JOURNAL = "journal/SAVE_JOURNAL";

export const saveJournal = (state, date) => {
  return async (dispatch) => {
    const content = convertToRaw(state.getCurrentContent());
    try {
      await axios.post("/api/journals", { content, date });
      dispatch({ type: SAVE_JOURNAL, payload: { date, content } });
    } catch (e) {
      dispatch(displayError(e.response.data));
    }
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_JOURNAL:
      const { date, content } = action.payload;
      return { ...state, [date]: content };
    default:
      return state;
  }
};

export default reducer;
