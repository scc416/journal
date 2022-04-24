import { Editor } from "draft-js";
import useEditor from "common/hooks/useEditor";

const JournalEditor = ({ date }) => {
  const { focusEditor, editor, editorState, onChange, readOnly } =
    useEditor(date);

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
    </div>
  );
};

export default JournalEditor;
