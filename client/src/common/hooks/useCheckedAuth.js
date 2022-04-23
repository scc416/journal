import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "features/auth/authSlice";

const useCheckedAuth = () => {
  const dispatch = useDispatch();

  const { hasCheckedAuth } = useSelector(({ auth }) => {
    return { hasCheckedAuth: "username" in auth };
  });

  useEffect(() => {
    if (!hasCheckedAuth) {
      dispatch(getCurrentUser());
    }
    // eslint-disable-next-line
  }, [hasCheckedAuth]);

  return hasCheckedAuth;
};

export default useCheckedAuth;
