import { useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const changeHandler = (e) => setSearch(e.target.value);
  const cancel = () => setSearch("");
  return { search, changeHandler, cancel };
};

export default useSearch;
