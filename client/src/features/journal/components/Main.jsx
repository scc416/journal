import Calendar from "./Calendar/";
import Editor from "./Editor/";
import SearchInput from "./Search/SearchInput";
import useSearch from "common/hooks/useSearch";
import Result from "./Search/Result/ResultList";
const Content = ({ disabledDays, minDate, value, date }) => {
  const { search, changeHandler, cancel } = useSearch();

  return (
    <div className="Journal">
      <div className="calendar-container">
        <SearchInput {...{ search, changeHandler, cancel }} />
        {search ? (
          <Result />
        ) : (
          <Calendar {...{ disabledDays, minDate, value }} />
        )}
      </div>
      <Editor date={date} />
    </div>
  );
};

export default Content;
