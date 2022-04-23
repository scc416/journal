import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "features/auth/LogIn";
import Register from "features/auth/Register";
import Journal from "features/journal/Journal";
import Redirect from "features/redirect/Redirect";
import Loading from "features/loading/Loading";
import useCurrentUser from "common/hooks/useCheckedAuth";
import useMode from "common/hooks/useMode";
import ToggleDarkModeButton from "features/mode/ToggleDarkModeButton";
import Error from "features/error/Error";
import { useSelector } from "react-redux";

const App = () => {
  const hasCheckedAuth = useCurrentUser();
  const { darkMode, toggleDarkMode } = useMode();
  const username = useSelector(({ auth }) => auth.username);
  return (
    <div className={darkMode ? "bp4-dark dark" : "bright"}>
      <Error />
      <ToggleDarkModeButton {...{ darkMode, toggleDarkMode }} />
      {hasCheckedAuth ? (
        username ? (
          <Routes>
            <Route path="/journal/:date" element={<Journal />} />
            <Route path="*" element={<Redirect />} />
          </Routes>
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
