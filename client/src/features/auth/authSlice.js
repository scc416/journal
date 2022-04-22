import axios from "axios";

const RECEIVE_USER = "user/RECEIVE_USER";

const initState = {};

export const getCurrentUsers = () => {
  return async (dispatch) => {
    try {
      const { data: username } = await axios.get("/api/users");
      dispatch({ type: RECEIVE_USER, payload: { username } });
    } catch (err) {
      console.log(err);
    }
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
};

export default reducer;
