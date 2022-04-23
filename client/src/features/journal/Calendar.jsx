import { DatePicker } from "@blueprintjs/datetime";
import { Classes } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";
import { formatDate } from "common/helpers";
import { useSelector } from "react-redux";
import moment from "moment";

const Calendar = ({ defaultDate }) => {
  const navigate = useNavigate();
  const journals = useSelector(({ journals }) => journals);
  const dates = Object.keys(journals);
  console.log(dates);
  return (
    <DatePicker
      className={Classes.ELEVATION_1}
      showActionsBar={true}
      maxDate={moment().toDate()}
      minDate={
        (dates.length && moment(dates[0]).subtract(1, "days").toDate()) ||
        moment().subtract(1, "days").toDate()
      }
      defaultValue={defaultDate && moment(defaultDate).toDate()}
      highlightCurrentDay={true}
      // dayPickerProps={{
      //   disabledDays: (date) => dates.includes(formatDate(date)),
      // }}
      onChange={(date) => {
        if (date) navigate(`/journal/${formatDate(date)}`);
      }}
    />
  );
};

export default Calendar;
