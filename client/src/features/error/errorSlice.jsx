const initState = { error: null, trackErrorChange: true };

const DISPLAY_ERROR = "error/DISPLAY_ERROR";
const REMOVE_ERROR = "error/REMOVE_ERROR";

export const displayError = (error) => {
  return {
    type: DISPLAY_ERROR,
    payload: { error },
  };
};

export const removeError = { type: REMOVE_ERROR };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case DISPLAY_ERROR:
      return {
        ...state,
        error: action.payload.error,
        trackErrorChange: !state.trackErrorChange,
      };
    case REMOVE_ERROR:
      console.log("REDUCER");
      return { ...state, error: null };
    default:
      return state;
  }
};

export default reducer;
