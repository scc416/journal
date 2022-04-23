import mode from "features/mode/modeSlice";
import username from "features/auth/authSlice";
import error from "features/error/errorSlice";
import journals from "features/journal/journalSlice";

const reducers = { mode, username, error, journals };

export default reducers;
