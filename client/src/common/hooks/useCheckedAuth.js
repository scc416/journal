import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTodayDate } from "common/helpers";
import { getCurrentUsers } from "features/auth/authSlice";

const useCheckedAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { hasCheckedAuth, id } = useSelector(({ auth }) => {
    return { hasCheckedAuth: "username" in auth, id: auth.id };
  });

  useEffect(() => {
    if (hasCheckedAuth) {
      if (id) navigate(`/${getTodayDate()}`);
      if (!id) navigate("/login");
    }
    if (!hasCheckedAuth) {
      dispatch(getCurrentUsers());
    }
    // eslint-disable-next-line
  }, [hasCheckedAuth]);

  return hasCheckedAuth;
};

export default useCheckedAuth;
