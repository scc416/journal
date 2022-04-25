import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useShowPassword from "./useShowPassword";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const data = useSelector(({ journals: { data } }) => data);

  const updateResults = () => {
    const newResults = [];

    for (const date in data) {
      const { title, text } = data[date];
      const searchLower = search.toLowerCase();
      const foundInTitle = title.toLowerCase().includes(searchLower);
      const foundInContent = text.toLowerCase().includes(searchLower);
      if (foundInTitle || foundInContent) newResults.push({ date, title });
    }

    setResults(newResults);
  };

  useEffect(() => {
    const t = setTimeout(updateResults, 500);

    return () => clearTimeout(t);
  }, [search]);
  const changeHandler = (e) => setSearch(e.target.value);

  const cancel = () => setSearch("");

  return { search, changeHandler, cancel, results };
};

export default useSearch;
