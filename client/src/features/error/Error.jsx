import { Toaster, Toast } from "@blueprintjs/core";
import useError from "common/hooks/useError";

const Error = () => {
  const { displayedError, dismissHandler } = useError();

  return (
    displayedError && (
      <Toaster>
        <Toast
          onDismiss={dismissHandler}
          message={displayedError}
          intent="danger"
        />
      </Toaster>
    )
  );
};

export default Error;
