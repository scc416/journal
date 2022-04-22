import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "features/auth/LogIn";
import Register from "features/auth/Register";
import Journal from "features/journal/Journal";
import Error from "features/error/NotFound";
import Loading from "features/loading/Loading";
import useCurrentUser from "common/hooks/useCheckedAuth";
import useMode from "common/hooks/useMode";
import ToggleDarkModeButton from "features/mode/ToggleDarkModeButton";

const App = () => {
  const hasCheckedAuth = useCurrentUser();
  const { darkMode, toggleDarkMode } = useMode();
  return (
    <div className={darkMode ? "bp4-dark dark" : "bright"}>
      <ToggleDarkModeButton {...{ darkMode, toggleDarkMode }} />
      {!hasCheckedAuth && <Loading />}
      {hasCheckedAuth && (
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/error" element={<Error />} />
          <Route path="/:date" element={<Journal />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
