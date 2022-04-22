import { Button, InputGroup, FormGroup } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import useShowPassword from "hooks/useShowPassword";
import LockButton from "./LockButton";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearRegisterInput } from "actions/users";

const LogIn = () => {
  const dispatch = useDispatch();
  const { showPassword, toggleShowPassword } = useShowPassword();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(clearRegisterInput);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <FormGroup label="Username">
          <InputGroup />
        </FormGroup>
        <FormGroup label="Password">
          <InputGroup
            rightElement={
              <LockButton {...{ showPassword, toggleShowPassword }} />
            }
            autoComplete="on"
            type={showPassword ? "text" : "password"}
          />
        </FormGroup>
        <FormGroup label="Confirm Password">
          <InputGroup
            rightElement={
              <LockButton {...{ showPassword, toggleShowPassword }} />
            }
            autoComplete="on"
            type={showPassword ? "text" : "password"}
          />
        </FormGroup>
        <Button type="submit">Register</Button>
      </form>
      <div className="user-link">
        Already a member? <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default LogIn;
