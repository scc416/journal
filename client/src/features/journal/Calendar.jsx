import "./Calendar.css";
import { DatePicker } from "@blueprintjs/datetime";
import { Classes } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";
import { formatDate, today } from "common/helpers";

const settings = () => {
  return {
    className: Classes.ELEVATION_1,
    highlightCurrentDay: true,
    showActionsBar: true,
    maxDate: today(),
  };
};

const Calendar = ({ value, disabledDays, minDate }) => {
  const navigate = useNavigate();
  const changeHandler = (date) => {
    if (date) navigate(`/journal/${formatDate(date)}`);
  };

  return (
    <DatePicker
      {...settings()}
      {...{
        minDate,
        value,
        dayPickerProps: { disabledDays },
        onChange: changeHandler,
      }}
    />
  );
};

export default Calendar;
