import "./LogoutButton.css";
import { Button } from "@blueprintjs/core";
import { logout } from "./authSlice";
import { useDispatch } from "react-redux";
import useCurrentUser from "common/hooks/useCurrentUser";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const clickHandler = () => dispatch(logout());
  const { username } = useCurrentUser();

  return (
    <div className="Logout-Button">
      Logged in as @{username}
      <Button icon="log-out" onClick={clickHandler} />
    </div>
  );
};

export default LogoutButton;
