import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "features/auth/authSlice";

const useCheckedAuth = () => {
  const dispatch = useDispatch();

  const { hasCheckedUsername, username } = useSelector(({ username }) => {
    return { hasCheckedUsername: username !== null, username };
  });

  useEffect(() => {
    if (!hasCheckedUsername) {
      dispatch(getCurrentUser());
    }
    // eslint-disable-next-line
  }, [hasCheckedUsername]);

  return { hasCheckedUsername, username };
};

export default useCheckedAuth;
