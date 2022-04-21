import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "components/UserSession/LogIn";
import Register from "components/UserSession/Register";
import Journal from "components/Journal";
import Error from "components/Error";
import Loading from "components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getTodayDate } from "helpers";

const App = () => {
  const navigate = useNavigate();
  const hasUser = useSelector((state) => "user" in state);
  useEffect(() => {
    if (hasUser) {
      navigate(`${getTodayDate()}`);
    }
    if (!hasUser) {
    }
  }, [hasUser]);
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
