import Calendar from "./Calendar/";
import Editor from "./Editor/";
import SearchInput from "./SearchInput/";
import useSearch from "common/hooks/useSearch";

const Content = ({ disabledDays, minDate, value, date }) => {
  const { search, changeHandler, cancel } = useSearch;

  return (
    <div className="Journal">
      <div className="calendar-container">
        <SearchInput {...{ search, changeHandler, cancel }} />
        <Calendar {...{ disabledDays, minDate, value }} />
      </div>
      <Editor date={date} />
    </div>
  );
};

export default Content;
