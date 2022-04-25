import EditorButtons from "./EditorButtons";
import { getStatusStr } from "common/helpers";

const Toolbar = ({ saved, mouseDownHandler, styles, lists, wordCount }) => {
  return (
    <div className="Editor-Toolbar">
      <EditorButtons {...{ mouseDownHandler, styles, lists }} />
      <div>{getStatusStr(saved)}</div>
      <div>{wordCount}</div>
    </div>
  );
};

export default Toolbar;
