import { Button, InputGroup, Intent, FormGroup } from "@blueprintjs/core";

import useShowPassword from "hooks/useShowPassword";

const LogIn = () => {
  const { showPassword, toggleShowPassword } = useShowPassword();
  const lockButton = (
    <Button
      icon={showPassword ? "unlock" : "lock"}
      intent={Intent.WARNING}
      minimal={true}
      onClick={toggleShowPassword}
    />
  );

  return (
    <div>
      <h1>Login</h1>
      <form>
        <FormGroup label="Username">
          <InputGroup />
        </FormGroup>
        <FormGroup label="Password">
          <InputGroup
            rightElement={lockButton}
            type={showPassword ? "text" : "password"}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default LogIn;
