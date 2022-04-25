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
  getFirstDay,
} from "common/helpers";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getJournals } from "features/journal/journalSlice";
import { useDispatch } from "react-redux";

const useJournal = (date) => {
  const formattedDate = getFormattedDate(date);
  const navigate = useNavigate();
  const { journals, gotData } = useSelector(
    ({ journals: { data, gotData } }) => {
      return { journals: data, gotData };
    }
  );

  const dates = Object.keys(journals);
  const minDate = getMinDate(dates.length && dates[0]);
  const dispatch = useDispatch();

  const disabledDays = (date) => {
    const formatted = formatDate(date);
    const hasJorunal = dates.includes(formatDate(date));
    const isToday = formatted === getTodayDate();
    const afterMinDate = compareDate(getLatestMinDate(), date);
    return !hasJorunal && !isToday && !afterMinDate;
  };

  const [css, setCss] = useState("");

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

  const dateIsAvailable = !disabledDays(date);
  const correctDateFormat = formattedDate === date;

  const validDate = formattedDate && dateIsAvailable && correctDateFormat;

  useEffect(() => {
    dispatch(getJournals());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (gotData) {
      if (!formattedDate) {
        navigate(`/journal/${getTodayDate()}`);
      } else if (!dateIsAvailable) {
        let day = getFirstDay(formattedDate);

        while (disabledDays(day)) {
          day = getNextDay(day);
        }

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
  };
};

export default useJournal;
