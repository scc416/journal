import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "features/auth/LogIn";
import Register from "features/auth/Register";
import Journal from "features/journal/components";
import Redirect from "features/redirect/Redirect";
import Loading from "features/loading/Loading";
import useCurrentUser from "common/hooks/useCurrentUser";
import useMode from "common/hooks/useMode";
import ToggleDarkModeButton from "features/mode/ToggleDarkModeButton";
import Error from "features/error/Error";
import Safety from "features/safety/Safety";
import useSafety from "common/hooks/useSafety";

const App = () => {
  const { hasCheckedUsername, username } = useCurrentUser();
  const { darkMode, toggleDarkMode } = useMode();
  const locked = useSafety();

  return (
    <div className={darkMode ? "bp4-dark dark" : "bright"}>
      <Error />
      <ToggleDarkModeButton {...{ darkMode, toggleDarkMode }} />
      {hasCheckedUsername ? (
        username ? (
          <>
            <Routes>
              <Route path="/journal/:date" element={<Journal />} />
              <Route path="*" element={<Redirect />} />
            </Routes>
            {locked && <Safety />})
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Redirect />} />
          </Routes>
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;
