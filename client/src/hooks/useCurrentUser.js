import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTodayDate } from "helpers";
import { getCurrentUsers } from "actions/users";

const useCurrentUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { hasUser, id } = useSelector(({ user }) => {
    return { hasUser: "id" in user, id: user.id };
  });
  useEffect(() => {
    if (hasUser) {
      console.log(id);
      if (id) navigate(`/${getTodayDate()}`);
      if (!id) navigate("/login");
    }
    if (!hasUser) {
      dispatch(getCurrentUsers());
    }
  }, [id]);

  return hasUser;
};

export default useCurrentUser;
