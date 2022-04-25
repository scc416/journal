import { InputGroup, FormGroup } from "@blueprintjs/core";
import CancelButton from "./CancelButton";

const SearchInput = ({ search, changeHandler, cancel }) => {
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
