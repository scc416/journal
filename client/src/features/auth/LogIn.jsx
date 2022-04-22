import "./Auth.css";
import { Button, InputGroup, FormGroup } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import useShowPassword from "common/hooks/useShowPassword";
import LockButton from "./LockButton";
import { useRef } from "react";

const LogIn = () => {
  const { showPassword, toggleShowPassword } = useShowPassword();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <FormGroup label="Username">
          <InputGroup
            large={true}
            inputRef={usernameRef}
            inputprops={{ ref: usernameRef }}
          />
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
