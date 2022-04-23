import "./Journal.css";
import LogoutButton from "features/auth/LogoutButton";
import Calendar from "./Calendar";
import Editor from "./Editor";
import { useNavigate, useParams } from "react-router-dom";
import {
  today,
  toDate,
  getFormattedDate,
  getTodayDate,
  formatDate,
} from "common/helpers";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Journal = () => {
  const { date } = useParams();
  const formattedDate = getFormattedDate(date);
  const navigate = useNavigate();
  const journals = useSelector(({ journals }) => journals);
  const dates = Object.keys(journals);
  const minDate = (dates.length && toDate(dates[0])) || today();

  const disabledDays = (date) => {
    const formatted = formatDate(date);
    const hasJorunal = dates.includes(formatDate(date));
    const isToday = formatted === getTodayDate();
    return !hasJorunal && !isToday;
  };

  const validDate = !(
    !formattedDate ||
    disabledDays(date) ||
    formattedDate !== date
  );

  useEffect(() => {
    if (!formattedDate || disabledDays(date)) {
      navigate(`/journal/${getTodayDate()}`);
    } else if (formattedDate !== date) {
      navigate(`/journal/${formattedDate}`);
    }
  }, []);

  return (
    <>
      <LogoutButton />
      {validDate && (
        <div className="Journal">
          <Calendar
            {...{ disabledDays, minDate, defaultValue: toDate(date) }}
          />
          <Editor date={date} />
        </div>
      )}
    </>
  );
};

export default Journal;
