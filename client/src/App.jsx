import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "components/UserSession/LogIn";
import Register from "components/UserSession/Register";
import Journal from "components/Journal";
import Error from "components/Error";
import Loading from "components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTodayDate } from "helpers";
import { getCurrentUsers } from "actions/users";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { hasUser, id } = useSelector(({ user }) => {
    return { hasUser: "id" in user, id: user.id };
  });
  useEffect(() => {
    if (hasUser) {
      console.log(id);
      if (id) navigate(`/${getTodayDate()}`);
      if (!id) navigate("/login");
    }
    if (!hasUser) {
      dispatch(getCurrentUsers());
    }
  }, [id]);
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
