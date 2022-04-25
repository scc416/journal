import { Button, InputGroup, FormGroup } from "@blueprintjs/core";
import useCurrentUser from "common/hooks/useCurrentUser";
import useShowPassword from "common/hooks/useShowPassword";
import LockButton from "features/auth/LockButton";
import { useRef } from "react";
import { logIn } from "features/auth/authSlice";
import { useDispatch } from "react-redux";
import { unlock } from "./safetySlice";

const Safety = () => {
  const { username } = useCurrentUser();
  const { showPassword, toggleShowPassword } = useShowPassword();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const clearPassword = () => (passwordRef.current.value = "");

  const sucessFn = () => dispatch(unlock);

  const submitHandler = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    dispatch(logIn(username, password, clearPassword, sucessFn));
  };

  return (
    <form onSubmit={submitHandler}>
      <FormGroup label={`Enter password for @${username}`}>
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
      <Button large={true} type="submit">
        Unlock
      </Button>
    </form>
  );
};

export default Safety;
