import { DatePicker, TimePrecision } from "@blueprintjs/datetime";
import { Classes, H5, Switch } from "@blueprintjs/core";

const Calendar = () => {
  return (
    <DatePicker
      className={Classes.ELEVATION_1}
      showActionsBar={true}
      // onChange={this.handleDateChange}
      // timePickerProps={timePickerProps}
      // {...props}
    />
  );
};

export default Calendar;
