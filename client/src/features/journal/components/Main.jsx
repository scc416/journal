import Calendar from "./Calendar/";
import Editor from "./Editor/";
import Search from "./Search/";

const Content = ({ disabledDays, minDate, value, date }) => {
  return (
    <div className="Journal">
      <div className="calendar-container">
        <Search />
        <Calendar {...{ disabledDays, minDate, value }} />
      </div>
      <Editor date={date} />
    </div>
  );
};

export default Content;
