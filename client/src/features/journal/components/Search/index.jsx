import Input from "./Input";
import useSearch from "common/hooks/useSearch";
import Result from "./Result/ResultList";
import "./Search.css";

const Search = () => {
  const { search, changeHandler, cancel, results } = useSearch();

  return (
    <div className="search">
      <Input {...{ search, changeHandler, cancel }} />
      <Result results={results} />
    </div>
  );
};

export default Search;
