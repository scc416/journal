import axios from "axios";
import { displayError } from "../error/errorSlice";
import { formatJournals, removeContent, getText } from "common/helpers";

const initState = { data: {}, gotData: false, saved: null, editCount: 0 };
const SAVE_JOURNAL = "journal/SAVE_JOURNAL";
const GET_JOURNALS = "journal/GET_JOURNALS";
const DELETE_JOURNAL = "journal/DELETE_JOURNAL";
const UPDATE_SAVED = "journal/UPDATE_SAVED";
const REMOVE_SAVED = "journal/REMOVE_SAVED";

export const showSavedTimeout = 3000;
const saveTimeout = 3000;

export const clearStatus = { type: REMOVE_SAVED };

export const saveJournal = (content, date, title) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SAVE_JOURNAL, payload: { date, content, title } });
      const {
        journals: { editCount: oldCount },
      } = getState();
      setTimeout(async () => {
        const {
          journals: { editCount: newCount },
        } = getState();
        if (oldCount === newCount) {
          await axios.post("/api/journals", { content, date, title });
          dispatch({ type: UPDATE_SAVED });
        }
      }, saveTimeout);
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
      await axios.delete("/api/journals", { data: { date } });
      dispatch({ type: DELETE_JOURNAL, payload: { date } });
    } catch (e) {
      dispatch(displayError(e.response.data));
    }
  };
};

const reducer = (state = initState, action) => {
  const { data: prevData, editCount } = state;
  switch (action.type) {
    case SAVE_JOURNAL:
      const {
        payload: { date, content, title },
      } = action;
      const text = getText(content);
      const newData = { ...prevData, [date]: { content, title, text } };
      return {
        ...state,
        data: newData,
        editCount: editCount + 1,
        saved: false,
      };
    case GET_JOURNALS:
      const {
        payload: { data: receivedData },
      } = action;
      const formattedData = formatJournals(receivedData);
      return { ...state, data: formattedData, gotData: true };
    case DELETE_JOURNAL:
      const {
        payload: { date: dateToBeClear },
      } = action;
      const data = removeContent(prevData, dateToBeClear);
      return { ...state, data };
    case UPDATE_SAVED:
      return { ...state, saved: true };
    case REMOVE_SAVED:
      return { ...state, saved: null };
    default:
      return state;
  }
};

export default reducer;
