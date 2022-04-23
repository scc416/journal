import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodayDate } from "common/helpers";
import Loading from "../loading/Loading";

const Redirect = () => {
  const navigate = useNavigate();
  const username = useSelector(({ auth }) => auth.username);
  const url = username ? `/journal/${getTodayDate()}` : "/login";

  useEffect(() => {
    navigate(url);
  }, []);

  return <Loading />;
};

export default Redirect;
