import "./Calendar.css";
import { DatePicker } from "@blueprintjs/datetime";
import { Classes } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";
import { formatDate, today, getMonth } from "common/helpers";

const settings = () => {
  return {
    className: Classes.ELEVATION_1,
    highlightCurrentDay: true,
    maxDate: today(),
  };
};

const Calendar = ({ value, disabledDays, minDate, dates }) => {
  const navigate = useNavigate();
  const changeHandler = (date) => {
    if (date) {
      const formattedDate = formatDate(date);
      const available = !disabledDays(formattedDate);
      if (available) {
        return navigate(`/journal/${formattedDate}`);
      }
      const month = getMonth(formattedDate);
      const day = dates.find((date) => date.includes(month));
      navigate(`/journal/${day}`);
    }
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
