import { InputGroup } from "@blueprintjs/core";
import CancelButton from "./CancelButton";

const SearchInput = ({ search, changeHandler, cancel }) => {
  return (
    <InputGroup
      large={true}
      placeholder="Search..."
      value={search}
      onChange={changeHandler}
      rightElement={<CancelButton search={search} cancel={cancel} />}
    />
  );
};

export default SearchInput;
