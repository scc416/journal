import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTodayDate } from "common/helpers";
import Loading from "../loading/Loading";

const Redirect = () => {
  const navigate = useNavigate();
  const username = useSelector(({ auth }) => auth.username);
  const url = username ? `/journal/${getTodayDate()}` : "/login";

  useEffect(() => {
    navigate(url);
    // eslint-disable-next-line
  }, []);

  return <Loading />;
};

export default Redirect;
