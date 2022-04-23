import mode from "features/mode/modeSlice";
import username from "features/auth/authSlice";
import error from "features/error/errorSlice";
import journal from "features/journal/journalSlice";

const reducers = { mode, username, error, journal };

export default reducers;
