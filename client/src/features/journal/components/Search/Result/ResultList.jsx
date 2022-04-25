import "./Result.css";
import ResultListItem from "./ResultListItem";

const Result = ({ results }) => {
  const resultElms = results.map((info, i) => (
    <ResultListItem {...info} key={i} />
  ));
  return <div className="search-result">{resultElms}</div>;
};

export default Result;
