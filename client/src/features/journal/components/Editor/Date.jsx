import { getLongDate } from "common/helpers";

const Date = ({ date }) => {
  return <div>{getLongDate(date)}</div>;
};

export default Date;
