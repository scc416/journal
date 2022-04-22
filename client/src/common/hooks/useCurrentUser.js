import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTodayDate } from "common/helpers";
import { getCurrentUsers } from "features/user/userSlice";

const useCurrentUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { hasUser, id } = useSelector(({ user }) => {
    return { hasUser: "username" in user, id: user.id };
  });

  useEffect(() => {
    if (hasUser) {
      if (id) navigate(`/${getTodayDate()}`);
      if (!id) navigate("/login");
    }
    if (!hasUser) {
      dispatch(getCurrentUsers());
    }
    // eslint-disable-next-line
  }, [hasUser]);

  return hasUser;
};

export default useCurrentUser;
