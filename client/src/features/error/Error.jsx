import { useDispatch, useSelector } from "react-redux";
import { Toaster, Toast } from "@blueprintjs/core";
import { useEffect, useState } from "react";
import { removeError } from "features/error/errorSlice";

const Error = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error.error);
  const [displayedError, setDisplayedError] = useState(error);

  useEffect(() => {
    if (error && displayedError) {
      setDisplayedError((prev) => null);
      const t = setTimeout(() => setDisplayedError((prev) => error), 1);
      return () => clearTimeout(t);
    }

    setDisplayedError((prev) => error);
    // eslint-disable-next-line
  }, [error]);
  return (
    displayedError && (
      <Toaster>
        <Toast
          onDismiss={() => dispatch(removeError)}
          message={displayedError}
          intent="danger"
        />
      </Toaster>
    )
  );
};

export default Error;
