import mode from "features/mode/modeSlice";
import auth from "features/auth/authSlice";
import error from "features/error/errorSlice";
import journal from "features/journal/journalSlice";

const reducers = { mode, auth, error, journal };

export default reducers;
