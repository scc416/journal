import moment from "moment";

export const today = () => moment().toDate();
export const toDate = (date) => moment(date).toDate();
export const getTodayDate = () => moment().format("YYYY-MM-DD");
export const formatDate = (date) => moment(date).format("YYYY-MM-DD");
const checkIfValid = (date) => moment(date).isValid();
export const getLongDate = (date) => moment(date).format("dddd, MMMM D, YYYY");

export const getFormattedDate = (date) =>
  checkIfValid(date) && formatDate(date);

export const formatJournals = (data) => {
  const result = {};
  for (const row of data) {
    const { date, content, title } = row;
    result[formatDate(date)] = { title, content };
  }
  return result;
};

export const removeKey = (journals, date) => {
  const result = { ...journals };
  delete result[date];
  return result;
};

export const countWords = (str) => {
  const regex = / |\n/;
  const words = str.split(regex).filter((word) => word);
  return words.length;
};
