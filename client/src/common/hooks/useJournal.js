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
  getStyledDate,
} from "common/helpers";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getJournals } from "features/journal/journalSlice";
import { useDispatch } from "react-redux";

const css2 = `
.calendar-container
.DayPicker-Day[aria-disabled="false"][aria-selected="false"]
.bp4-datepicker-day-wrapper {
color: #4f82bd;
}`;

const getStyle = (date) => {
  // Mon Apr 18 2022
  const formattedDate = getStyledDate(date);
  return `
    .calendar-container
    .DayPicker-Day[aria-label="${formattedDate}"][aria-disabled="false"][aria-selected="false"]
   .bp4-datepicker-day-wrapper {
    color: #4f82bd;
   }
   `;
};

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
    console.log("update css")
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
      if (!formattedDate || !dateIsAvailable) {
        console.log("navigate(`/journal/${getTodayDate()}`)");
        navigate(`/journal/${getTodayDate()}`);
      } else if (!correctDateFormat) {
        console.log(`/journal/${formattedDate}`);

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
