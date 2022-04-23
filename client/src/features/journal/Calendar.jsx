import { DatePicker } from "@blueprintjs/datetime";
import { Classes } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";
import { formatDate, today } from "common/helpers";

const Calendar = ({ defaultValue, disabledDays, minDate }) => {
  const navigate = useNavigate();
  const changeHandler = (date) => {
    if (date) navigate(`/journal/${formatDate(date)}`);
  };

  return (
    <DatePicker
      {...{
        minDate,
        defaultValue,
        dayPickerProps: { disabledDays },
        className: Classes.ELEVATION_1,
        highlightCurrentDay: true,
        showActionsBar: true,
        onChange: changeHandler,
        maxDate: today(),
      }}
    />
  );
};

export default Calendar;
