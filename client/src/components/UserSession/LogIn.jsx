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
      <h1>Login</h1>
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
        <Button type="submit">Login</Button>
      </form>
      <div className="user-link">
        Not a member? <Link to="/register">Register</Link>.
      </div>
    </>
  );
};

export default LogIn;
