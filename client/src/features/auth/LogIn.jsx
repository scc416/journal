import "./Auth.css";
import { Button, InputGroup, FormGroup } from "@blueprintjs/core";
import { Link, useNavigate } from "react-router-dom";
import useShowPassword from "common/hooks/useShowPassword";
import LockButton from "./LockButton";
import { useRef, useEffect } from "react";
import { logIn } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTodayDate } from "common/helpers";

const LogIn = () => {
  const { showPassword, toggleShowPassword } = useShowPassword();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const username = useSelector(({ auth }) => auth.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (username) navigate(`/${getTodayDate()}`);
    // eslint-disable-next-line
  }, [username]);

  const submitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    dispatch(logIn(username, password));
    passwordRef.current.value = "";
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <FormGroup label="Username">
          <InputGroup large={true} inputRef={usernameRef} />
        </FormGroup>
        <FormGroup label="Password">
          <InputGroup
            inputRef={passwordRef}
            autoComplete="on"
            large={true}
            rightElement={
              <LockButton {...{ showPassword, toggleShowPassword }} />
            }
            type={showPassword ? "text" : "password"}
          />
        </FormGroup>
        <Button type="submit" large={true}>
          Login
        </Button>
      </form>
      <div className="user-link">
        Not a member? <Link to="/register">Register</Link>
      </div>
    </>
  );
};

export default LogIn;
