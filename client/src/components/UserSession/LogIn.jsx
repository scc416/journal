import { Button, InputGroup, FormGroup } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import useShowPassword from "hooks/useShowPassword";
import LockButton from "./LockButton";
import { USERNAME, PASSWORD } from "constants";
import { updateLoginDetails } from "actions/users";
import { useDispatch, useSelector } from "react-redux";

const LogIn = () => {
  const { showPassword, toggleShowPassword } = useShowPassword();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const dispatch = useDispatch();
  const { [USERNAME]: username, [PASSWORD]: password } = useSelector(
    ({ user: { login } }) => {
      return {
        [USERNAME]: login && USERNAME in login ? login[USERNAME] : "",
        [PASSWORD]: login && PASSWORD in login ? login[PASSWORD] : "",
      };
    }
  );
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <FormGroup label="Username">
          <InputGroup
            value={username}
            onChange={(e) => dispatch(updateLoginDetails(USERNAME, e))}
          />
        </FormGroup>
        <FormGroup label="Password">
          <InputGroup
            value={password}
            onChange={(e) => dispatch(updateLoginDetails(PASSWORD, e))}
            autoComplete="on"
            rightElement={
              <LockButton {...{ showPassword, toggleShowPassword }} />
            }
            type={showPassword ? "text" : "password"}
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </form>
      <div className="user-link">
        Not a member? <Link to="/register">Register</Link>
      </div>
    </>
  );
};

export default LogIn;
