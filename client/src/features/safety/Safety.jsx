import { Button, InputGroup, FormGroup } from "@blueprintjs/core";
import useCurrentUser from "common/hooks/useCurrentUser";

const Safety = () => {
  const { username } = useCurrentUser();
  return (
    <>
      <FormGroup label={`Enter password for @${username}`}>
        <InputGroup large={true} />
      </FormGroup>
      <Button large={true}>Unlock</Button>
    </>
  );
};

export default Safety;
