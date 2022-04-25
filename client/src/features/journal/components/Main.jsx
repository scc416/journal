import Calendar from "./Calendar/";
import Editor from "./Editor/";
import SearchInput from "./Search/SearchInput";
import useSearch from "common/hooks/useSearch";
import Result from "./Search/Result/ResultList";
import "./Search/Search.css";

const Content = ({ disabledDays, minDate, value, date }) => {
  const { search, changeHandler, cancel, results } = useSearch();

  return (
    <div className="Journal">
      <div className="calendar-container">
        <div className="search">
          <SearchInput {...{ search, changeHandler, cancel }} />
          <Result results={results} />
        </div>
        <Calendar {...{ disabledDays, minDate, value }} />
      </div>
      <Editor date={date} />
    </div>
  );
};

export default Content;
