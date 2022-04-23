import "./LogoutButton.css";
import { Button } from "@blueprintjs/core";
import { logout } from "./authSlice";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const clickHandler = () => dispatch(logout());
  return (
    <div className="LogoutButton">
      <Button icon="log-out" onClick={clickHandler} />
    </div>
  );
};

export default LogoutButton;
