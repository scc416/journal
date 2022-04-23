import { useNavigate } from "react-router-dom";
import {
  today,
  toDate,
  getFormattedDate,
  getTodayDate,
  formatDate,
} from "common/helpers";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getJournals } from "features/journal/journalSlice";
import { useDispatch } from "react-redux";

const useJournal = (date) => {
  const formattedDate = getFormattedDate(date);
  const navigate = useNavigate();
  const journals = useSelector(({ journals }) => journals);
  const dates = Object.keys(journals);
  const minDate = (dates.length && toDate(dates[0])) || today();
  const dispatch = useDispatch();

  const disabledDays = (date) => {
    const formatted = formatDate(date);
    const hasJorunal = dates.includes(formatDate(date));
    const isToday = formatted === getTodayDate();
    return !hasJorunal && !isToday;
  };

  const dateIsAvailable = !disabledDays(date);
  const correctDateFormat = formattedDate === date;

  const validDate = formattedDate && dateIsAvailable && correctDateFormat;

  useEffect(() => {
    dispatch(getJournals());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!formattedDate || !dateIsAvailable) {
      navigate(`/journal/${getTodayDate()}`);
    } else if (!correctDateFormat) {
      navigate(`/journal/${formattedDate}`);
    }
    // eslint-disable-next-line
  }, [validDate]);

  return { validDate, disabledDays, minDate, defaultValue: toDate(date), date };
};

export default useJournal;
