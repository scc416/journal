import axios from "axios";
import { displayError } from "../error/errorSlice";
import { formatJournals, removeKey } from "common/helpers";

const initState = { data: {}, gotData: false };
const SAVE_JOURNAL = "journal/SAVE_JOURNAL";
const GET_JOURNALS = "journal/GET_JOURNALS";
const DELETE_JOURNAL = "journal/DELETE_JOURNAL";

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

export const deleteJournal = (date) => {
  return async (dispatch) => {
    try {
      await axios.delete("/api/journals", { date });
      dispatch({ type: DELETE_JOURNAL, payload: { date } });
    } catch (e) {
      dispatch(displayError(e.response.data));
    }
  };
};

const reducer = (state = initState, action) => {
  const { data: prevData } = state;
  switch (action.type) {
    case SAVE_JOURNAL:
      const {
        payload: { date, content },
      } = action;
      const newData = { ...prevData, [date]: content };
      return { ...state, data: newData };
    case GET_JOURNALS:
      const {
        payload: { data: receivedData },
      } = action;
      const formattedData = formatJournals(receivedData);
      return { ...state, data: formattedData, gotData: true };
    case DELETE_JOURNAL:
      const {
        payload: { date: dateToBeDelete },
      } = action;
      const data = removeKey(prevData, dateToBeDelete);
      return { ...state, data };
    default:
      return state;
  }
};

export default reducer;
