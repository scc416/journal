import moment from "moment";
import { convertFromRaw } from "draft-js";

export const getTodayDate = () => moment().format("YYYY-MM-DD");
export const formatDate = (date) => moment(date).format("YYYY-MM-DD");
export const getFormattedDate = (date) =>
  (moment(date).isValid() && formatDate(date)) || getTodayDate();

export const formatJournals = (data) => {
  const result = {};
  for (const row of data) {
    const { date, content } = row;
    result[formatDate(date)] = content;
  }
  return result;
};
