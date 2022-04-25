import moment from "moment";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";

const numOfAlarmMinutes = 60;
const minDateMonthsBeforeToday = 1;

export const convertTimeToInt = (time) => {
  const str = moment(time).format("x");
  const int = parseInt(str);
  return int;
};

export const getAlarm = () => {
  const alarm = moment().add(numOfAlarmMinutes, "seconds");
  const int = convertTimeToInt(alarm);
  return int;
};

const compareDate = (date1, date2) => {
  const formattedDate1 =
    typeof date1 === "Number" ? date1 : convertTimeToInt(date1);
  const formattedDate2 =
    typeof date2 === "Number" ? date2 : convertTimeToInt(date2);
  console.log(formattedDate1 - formattedDate2);
  return formattedDate1 < formattedDate2;
};

export const getMinDate = (date) => {
  const beforeNow = moment().subtract(minDateMonthsBeforeToday, "months");
  const dateIsEarlier = compareDate(beforeNow, date);
  if (dateIsEarlier) return date;
  return beforeNow.toDate();
};

export const today = () => moment().toDate();
export const toDate = (date) => moment(date).toDate();
export const getTodayDate = () => moment().format("YYYY-MM-DD");
export const formatDate = (date) => moment(date).format("YYYY-MM-DD");
const checkIfValid = (date) => moment(date).isValid();
export const getResultDate = (date) => moment(date).format("MMMM D, YYYY");
export const getLongDate = (date) => moment(date).format("dddd, MMMM D, YYYY");

export const isTimeup = (date) => compareDate(date);

export const getFormattedDate = (date) =>
  checkIfValid(date) && formatDate(date);

export const getText = (content) => {
  return convertFromRaw(content).getPlainText();
};

export const formatJournals = (data) => {
  const result = {};
  for (const row of data) {
    const { date, content, title } = row;
    const text = getText(content);
    result[formatDate(date)] = { title, content, text };
  }
  return result;
};

export const removeContent = (journals, date) => {
  const content = convertToRaw(EditorState.createEmpty().getCurrentContent());
  return { ...journals, [date]: { content, title: "" } };
};

export const countWords = (str) => {
  const regex = / |\n/;
  const words = str.split(regex).filter((word) => word);
  return words.length;
};

export const getStatusStr = (saved) => {
  return saved ? "Saved" : saved === false && "Saving...";
};
