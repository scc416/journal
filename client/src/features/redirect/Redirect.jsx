import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodayDate } from "common/helpers";

const Redirect = () => {
  const { noAuth } = useParams();
  const navigate = useNavigate();
  const username = useSelector(({ auth }) => auth.username);
  const text = noAuth ? "Please login to view journal" : "Page not found";

  const [url, pageName] = username
    ? [`/journal/${getTodayDate()}`, "today's journal"]
    : ["/login", "login page"];

  useEffect(() => {
    const t = setTimeout(() => navigate(url), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <h1>{text}</h1>
      <h2>Redirecting to {pageName}...</h2>
    </>
  );
};

export default Redirect;
