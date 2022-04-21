import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/UserSession/LogIn";
import Register from "./components/UserSession/Register";
import Journal from "./components/Journal";
import Error from "./components/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/error" element={<Error />} />
      <Route path="/:date" element={<Journal />} />
    </Routes>
  );
};

export default App;
