import { DatePicker } from "@blueprintjs/datetime";
import { Classes } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";
import { formatDate } from "common/helpers";

const Calendar = ({ defaultDate }) => {
  const navigate = useNavigate();
  return (
    <DatePicker
      className={Classes.ELEVATION_1}
      showActionsBar={true}
      maxDate={new Date()}
      minDate={new Date(0)}
      defaultValue={new Date(defaultDate)}
      highlightCurrentDay={true}
      // dayPickerProps={{ disabledDays: dateSet }}
      onChange={(date) => navigate(`/journal/${formatDate(date)}`)}
    />
  );
};

export default Calendar;
