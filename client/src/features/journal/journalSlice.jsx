import axios from "axios";
import { Editor, EditorState } from "draft-js";
import { displayError } from "../error/errorSlice";
import { formatJournals } from "common/helpers";

const initState = { data: {}, gotData: false };
const SAVE_JOURNAL = "journal/SAVE_JOURNAL";
const GET_JOURNALS = "journal/GET_JOURNALS";

export const saveJournal = (content, date) => {
  return async (dispatch) => {
    try {
      await axios.post("/api/journals", { content, date });
      dispatch({ type: SAVE_JOURNAL, payload: { date, content } });
    } catch (e) {
      dispatch(displayError(e.response.data));
    }
  };
};

export const getJournals = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/journals");
      dispatch({ type: GET_JOURNALS, payload: { data } });
    } catch (e) {
      dispatch(displayError(e.response.data));
    }
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_JOURNAL:
      const {
        payload: { date, content },
      } = action;
      const { data: prevData } = state;
      const newData = { ...prevData, [date]: content };
      return { ...state, data: newData };
    case GET_JOURNALS:
      const {
        payload: { data },
      } = action;
      const formattedData = formatJournals(data);
      console.log(formattedData);
      return { ...state, data: formattedData, gotData: true };
    default:
      return state;
  }
};

export default reducer;
