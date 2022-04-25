import { useNavigate } from "react-router-dom";
import {
  toDate,
  getFormattedDate,
  getTodayDate,
  formatDate,
  getMinDate,
  compareDate,
  getLatestMinDate,
  getNextDay,
  getStyle,
  getAvailableDate,
} from "common/helpers";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getJournals } from "features/journal/journalSlice";
import { useDispatch } from "react-redux";

const useJournal = (date) => {
  const [css, setCss] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { journals, gotData } = useSelector(
    ({ journals: { data, gotData } }) => {
      return { journals: data, gotData };
    }
  );

  const disabledDays = (date) => {
    const formatted = formatDate(date);
    const hasJorunal = dates.includes(formatDate(date));
    const isToday = formatted === getTodayDate();
    const afterMinDate = compareDate(getLatestMinDate(), date);
    return !hasJorunal && !isToday && !afterMinDate;
  };

  const formattedDate = getFormattedDate(date);
  const dates = Object.keys(journals);
  const minDate = getMinDate(dates.length && dates[0]);
  const dateIsAvailable = !disabledDays(date);
  const correctDateFormat = formattedDate === date;
  const validDate = formattedDate && dateIsAvailable && correctDateFormat;

  useEffect(() => {
    const cssArr = [];
    for (let i = dates[0]; compareDate(i, getTodayDate()); i = getNextDay(i)) {
      const hasJournal = i in journals;
      if (hasJournal) {
        const style = getStyle(i);
        cssArr.push(style);
      }
    }
    const css = cssArr.join("");
    setCss(css);

    // eslint-disable-next-line
  }, [journals]);

  useEffect(() => {
    dispatch(getJournals());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (gotData) {
      if (!formattedDate) {
        navigate(`/journal/${getTodayDate()}`);
      } else if (!dateIsAvailable) {
        const day = getAvailableDate(formattedDate, dates);
        navigate(`/journal/${day}`);
      } else if (!correctDateFormat) {
        navigate(`/journal/${formattedDate}`);
      }
    }
    // eslint-disable-next-line
  }, [gotData, formattedDate, dateIsAvailable, correctDateFormat]);

  return {
    gotData,
    validDate,
    disabledDays,
    minDate,
    value: toDate(date),
    date,
    css,
    dates,
  };
};

export default useJournal;
