import moment from "moment";
import { convertFromRaw } from "draft-js";

const numOfAlarmMinutes = 3;
const beforeToday = 1;

const getMonth = (date) => {
  const month = moment(date).format("YYYY-MM");
  return month;
};

export const getAvailableDate = (date, dates) => {
  const month = getMonth(date);
  const day = dates.find((date) => date.includes(month));
  return day;
};

const convertTimeToStr = (time) => {
  const str = moment(time).format();
  return str;
};

export const getAlarm = () => {
  const alarm = moment().add(numOfAlarmMinutes, "minutes");
  const int = convertTimeToStr(alarm);
  return int;
};

export const compareDate = (date1, date2) => {
  const formattedDate1 = moment(date1);
  const formattedDate2 = moment(date2);
  return formattedDate1 <= formattedDate2;
};

export const getLatestMinDate = () => {
  const min = formatDate(
    moment().subtract(beforeToday, "months").add(beforeToday, "days")
  );
  return min;
};

export const getStyledDate = (date) => {
  return moment(date).format("ddd MMM DD YYYY");
};

export const getMinDate = (date) => {
  const beforeNow = getLatestMinDate();
  const dateIsEarlier = compareDate(date, beforeNow);
  if (dateIsEarlier) return moment(date).toDate();
  return moment(beforeNow).toDate();
};

export const today = () => moment().toDate();
export const toDate = (date) => moment(date).toDate();
export const getTodayDate = () => moment().format("YYYY-MM-DD");
export const formatDate = (date) => moment(date).format("YYYY-MM-DD");
const checkIfValid = (date) => moment(date).isValid();
export const getResultDate = (date) => moment(date).format("MMMM D, YYYY");
export const getLongDate = (date) =>
  moment(date).format("dddd, MMMM D, YYYY");

export const isTimeUp = (date) => compareDate(date);

export const getFormattedDate = (date) =>
  checkIfValid(date) && formatDate(date);

export const getText = (content) => {
  return convertFromRaw(content).getPlainText();
};

export const getNextDay = (date) => {
  const next = moment(date).add(1, "days");
  return formatDate(next);
};

export const formatJournals = (data) => {
  const result = {};
  const dates = [];
  for (const row of data) {
    const { date, content, title } = row;
    const text = getText(content);
    const formatedDate = formatDate(date);
    result[formatedDate] = { title, content, text };
    dates.push(formatedDate);
  }
  return [result, dates];
};

export const removeContent = (journals, date) => {
  const result = { ...journals };
  delete result[date];
  return result;
};

export const countWords = (str) => {
  const regex = / |\n/;
  const words = str.split(regex).filter((word) => word);
  return words.length;
};

export const getStatusStr = (saved) => {
  return saved ? "Saved" : saved === false && "Saving...";
};

export const getStyle = (date) => {
  const formattedDate = getStyledDate(date);
  return `
    .calendar-container
    .DayPicker-Day[aria-label="${formattedDate}"][aria-disabled="false"][aria-selected="false"]
   .bp4-datepicker-day-wrapper {
    color: #4f82bd;
   }
   `;
};
