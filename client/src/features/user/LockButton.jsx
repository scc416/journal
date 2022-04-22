import { Button, Intent } from "@blueprintjs/core";

const LockButton = ({ showPassword, toggleShowPassword }) => {
  return (
    <Button
      icon={showPassword ? "unlock" : "lock"}
      intent={Intent.WARNING}
      minimal={true}
      onClick={toggleShowPassword}
    />
  );
};

export default LockButton;
