import "./Editor.css";
import { Editor } from "draft-js";
import { TextArea } from "@blueprintjs/core";
import useEditor from "common/hooks/useEditor";
import EditorButtons from "./EditorButtons";

const JournalEditor = ({ date }) => {
  const {
    focusEditor,
    editor,
    editorState,
    onChange,
    mouseDownHandler,
    styles,
    lists,
  } = useEditor(date);

  return (
    <div className="Editor">
      <div>
        <div>{date}</div>
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
        <div>103</div>
      </div>
    </div>
  );
};

export default JournalEditor;
