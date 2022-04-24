import "./Auth.css";
import { Button, InputGroup, FormGroup } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import useShowPassword from "common/hooks/useShowPassword";
import LockButton from "./LockButton";
import { useRef } from "react";
import { register } from "./authSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const { showPassword, toggleShowPassword } = useShowPassword();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const dispatch = useDispatch();

  const clearPasswords = () => {
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    dispatch(register(username, password, confirmPassword, clearPasswords));
  };
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <FormGroup label="Username">
          <InputGroup large={true} inputRef={usernameRef} />
        </FormGroup>
        <FormGroup label="Password">
          <InputGroup
            large={true}
            inputRef={passwordRef}
            rightElement={
              <LockButton {...{ showPassword, toggleShowPassword }} />
            }
            autoComplete="on"
            type={showPassword ? "text" : "password"}
          />
        </FormGroup>
        <FormGroup label="Confirm Password">
          <InputGroup
            inputRef={confirmPasswordRef}
            large={true}
            rightElement={
              <LockButton {...{ showPassword, toggleShowPassword }} />
            }
            autoComplete="on"
            type={showPassword ? "text" : "password"}
          />
        </FormGroup>
        <Button type="submit" large={true}>
          Register
        </Button>
      </form>
      <div className="user-link">
        Already a member? <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default Register;
