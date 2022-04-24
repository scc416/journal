import { Button } from "@blueprintjs/core";

const EditorButtons = ({ boldClickHandler }) => {
  return (
    <div>
      <Button icon="BOLD" minimal={true} onMouseDown={boldClickHandler} />
    </div>
  );
};

export default EditorButtons;
