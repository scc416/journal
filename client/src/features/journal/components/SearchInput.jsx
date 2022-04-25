import { useRef } from "react";
import { InputGroup, FormGroup } from "@blueprintjs/core";

const SearchInput = () => {
  const search = useRef();

  return (
    <FormGroup>
      <InputGroup large={true} inputRef={search} placeholder="Search..." />
    </FormGroup>
  );
};

export default SearchInput;
