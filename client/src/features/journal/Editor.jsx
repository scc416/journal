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
    boldClickHandler,
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
      <EditorButtons boldClickHandler={boldClickHandler} />
    </div>
  );
};

export default JournalEditor;
