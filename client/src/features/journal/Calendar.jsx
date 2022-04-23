import { DatePicker } from "@blueprintjs/datetime";
import { Classes } from "@blueprintjs/core";
import moment from "moment";
import { useEffect, useState } from "react";

const Calendar = () => {
  const d = new Date();
  const day = new Date(moment().subtract(10, "days"));
  const [dateSet, setDateSet] = useState([]);
  useEffect(() => {
    console.log(dateSet);
  }, [dateSet]);
  return (
    <DatePicker
      className={Classes.ELEVATION_1}
      showActionsBar={true}
      maxDate={d}
      minDate={new Date(0)}
      highlightCurrentDay={true}
      dayPickerProps={{ disabledDays: dateSet }}
      onChange={(e) => setDateSet((prev) => prev.concat([e]))}
    />
  );
};

export default Calendar;
