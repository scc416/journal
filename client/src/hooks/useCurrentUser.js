import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTodayDate } from "helpers";
import { getCurrentUsers } from "actions/users";

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
  }, [hasUser]);

  return hasUser;
};

export default useCurrentUser;
