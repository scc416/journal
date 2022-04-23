import moment from "moment";

export const today = () => moment().toDate();
export const toDate = (date) => moment(date).toDate();
export const getTodayDate = () => moment().format("YYYY-MM-DD");
export const formatDate = (date) => moment(date).format("YYYY-MM-DD");
const checkIfValid = (date) => moment(date).isValid();
export const getFormattedDate = (date) =>
  checkIfValid(date) && formatDate(date);

export const formatJournals = (data) => {
  const result = {};
  for (const row of data) {
    const { date, content } = row;
    result[formatDate(date)] = content;
  }
  return result;
};
