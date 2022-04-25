import "./Result.css";
import ResultListItem from "./ResultListItem";

const Result = ({ results }) => {
  const resultElms = results.map((info, i) => (
    <ResultListItem {...info} key={i} />
  ));
  return (
    <div className="search-result">
      {results.length ? resultElms : "No journal is found"}
    </div>
  );
};

export default Result;
