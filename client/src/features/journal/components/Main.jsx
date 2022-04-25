import Calendar from "./Calendar/";
import Editor from "./Editor/";
import SearchInput from "./SearchInput";

const Content = ({ disabledDays, minDate, value, date }) => {
  return (
    <div className="Journal">
      <div className="calendar-container">
        <SearchInput />
        <Calendar {...{ disabledDays, minDate, value }} />
      </div>
      <Editor date={date} />
    </div>
  );
};

export default Content;
