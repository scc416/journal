import { DatePicker } from "@blueprintjs/datetime";
import { Classes } from "@blueprintjs/core";

const Calendar = () => {
  return (
    <DatePicker
      className={Classes.ELEVATION_1}
      showActionsBar={true}
      maxDate={new Date()}
      minDate={new Date()}
      highlightCurrentDay={true}
      // dayPickerProps={{ disabledDays: dateSet }}
      // onChange={(e) => setDateSet((prev) => prev.concat([e]))}
    />
  );
};

export default Calendar;
