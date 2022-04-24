import { Button } from "@blueprintjs/core";

const EditorButtons = ({ clickHandler }) => {
  return (
    <div>
      <Button icon="BOLD" minimal={true} onMouseDown={clickHandler} />
    </div>
  );
};

export default EditorButtons;
