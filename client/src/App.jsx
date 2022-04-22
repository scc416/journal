import "./App.css";
import "components/UserSession/UserSession.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "components/UserSession/LogIn";
import Register from "components/UserSession/Register";
import Journal from "components/Journal";
import Error from "components/Error";
import Loading from "components/Loading";
import useCurrentUser from "hooks/useCurrentUser";
import useMode from "hooks/useMode";
import ToggleDarkModeButton from "components/ToggleDarkModeButton";

const App = () => {
  const hasUser = useCurrentUser();
  const { darkMode, toggleDarkMode } = useMode();
  return (
    <div className={darkMode ? "bp4-dark dark" : "bright"}>
      <ToggleDarkModeButton {...{ darkMode, toggleDarkMode }} />
      <div className="container">
        {!hasUser && <Loading />}
        {hasUser && (
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/error" element={<Error />} />
            <Route path="/:date" element={<Journal />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
