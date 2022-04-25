import { Button } from "@blueprintjs/core";

const CancelButton = ({ search, cancel }) => {
  return search && <Button icon="cross" minimal={true} onClick={cancel} />;
};

export default CancelButton;
