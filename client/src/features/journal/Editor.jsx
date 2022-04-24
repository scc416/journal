import { Editor } from "draft-js";
import useEditor from "common/hooks/useEditor";
import { Button } from "@blueprintjs/core";
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
      <div>
        <Button icon="bold" minimal={true} onMouseDown={boldClickHandler} />
      </div>
    </div>
  );
};

export default JournalEditor;
