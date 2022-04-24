import "./Editor.css";
import { Editor } from "draft-js";
import { TextArea } from "@blueprintjs/core";
import useEditor from "common/hooks/useEditor";
import EditorButtons from "./EditorButtons";
import { getLongDate } from "common/helpers";

const JournalEditor = ({ date }) => {
  const {
    focusEditor,
    editor,
    editorState,
    onChange,
    mouseDownHandler,
    styles,
    lists,
    wordCount,
  } = useEditor(date);

  return (
    <div className="Editor">
      <div>
        <div>{getLongDate(date)}</div>
        <TextArea
          large={true}
          placeholder="Title"
          growVertically={true}
          // onChange={this.handleChange}
          // value={this.state.value}
        />
        <Editor
          {...{
            onChange,
            editorState,
            ref: editor,
            placeholder: "How was your day?",
            onClick: focusEditor,
          }}
        />
      </div>
      <div className="Editor-Toolbar">
        <EditorButtons {...{ mouseDownHandler, styles, lists }} />
        <div>{wordCount}</div>
      </div>
    </div>
  );
};

export default JournalEditor;
