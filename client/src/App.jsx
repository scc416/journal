import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "components/UserSession/LogIn";
import Register from "components/UserSession/Register";
import Journal from "components/Journal";
import Error from "components/Error";
import Loading from "components/Loading";
import useCurrentUser from "hooks/useCurrentUser";

const App = () => {
  const hasUser = useCurrentUser();
  return (
    <>
      {!hasUser && <Loading />}
      {hasUser && (
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/error" element={<Error />} />
          <Route path="/:date" element={<Journal />} />
        </Routes>
      )}
    </>
  );
};

export default App;
