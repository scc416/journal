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
        <h3>{date}</h3>
        <TextArea
          large={true}
          placeholder="Title"
          growVertically={false}
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

      <EditorButtons {...{ mouseDownHandler, styles, lists }} />
    </div>
  );
};

export default JournalEditor;
