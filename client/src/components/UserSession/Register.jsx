import { Button, InputGroup, Intent, FormGroup } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import useShowPassword from "hooks/useShowPassword";
import LockButton from "./LockButton";

const LogIn = () => {
  const { showPassword, toggleShowPassword } = useShowPassword();
  const submitHandler = (e) => {
    e.preventDefault();
  };
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
            type={showPassword ? "text" : "password"}
          />
        </FormGroup>
        <FormGroup label="Confirm Password">
          <InputGroup
            rightElement={
              <LockButton {...{ showPassword, toggleShowPassword }} />
            }
            type={showPassword ? "text" : "password"}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
      <div className="user-link">
        Already a member? <Link to="/login">Login</Link>.
      </div>
    </>
  );
};

export default LogIn;
