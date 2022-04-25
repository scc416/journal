import { useState } from "react";
import { InputGroup, FormGroup } from "@blueprintjs/core";
import CancelButton from "./CancelButton";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const changeHandler = (e) => setSearch(e.target.value);
  const cancel = () => setSearch("");
  return (
    <FormGroup>
      <InputGroup
        large={true}
        placeholder="Search..."
        value={search}
        onChange={changeHandler}
        rightElement={<CancelButton search={search} cancel={cancel} />}
      />
    </FormGroup>
  );
};

export default SearchInput;
