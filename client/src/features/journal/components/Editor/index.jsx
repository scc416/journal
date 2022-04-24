import "./Editor.css";
import { Editor } from "draft-js";
import useEditor from "common/hooks/useEditor";
import EditorButtons from "./EditorButtons";

const JournalEditor = ({ date }) => {
  const {
    focusEditor,
    editor,
    editorState,
    onChange,
    readOnly,
    mouseDownHandler,
    styles,
    lists,
  } = useEditor(date);

  return (
    <div className="Editor" onClick={focusEditor}>
      <Editor
        {...{
          readOnly,
          onChange,
          editorState,
          ref: editor,
          placeholder: "How was your day?",
        }}
      />
      <EditorButtons {...{ mouseDownHandler, styles, lists }} />
    </div>
  );
};

export default JournalEditor;
