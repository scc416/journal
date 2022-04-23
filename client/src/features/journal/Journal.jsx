import "./Journal.css";
import LogoutButton from "features/auth/LogoutButton";
import Calendar from "./Calendar";
import Editor from "./Editor";
import { useNavigate, useParams } from "react-router-dom";
import { formatDate, getFormattedDate } from "common/helpers";
import { useEffect } from "react";

const Journal = () => {
  const { date } = useParams();
  const formattedDate = getFormattedDate(date);
  const navigate = useNavigate();

  useEffect(() => {
    if (formatDate !== date) navigate(`/journal/${formattedDate}`);
  }, []);

  return (
    <>
      <LogoutButton />
      <div className="Journal">
        <Calendar defaultDate={formattedDate} />
        <Editor date={formattedDate} />
      </div>
    </>
  );
};

export default Journal;
