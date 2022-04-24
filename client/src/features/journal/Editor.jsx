import { useState, useRef } from "react";
import { Editor, EditorState } from "draft-js";
import moment from "moment";
import { saveJournal } from "./journalSlice";
import { useDispatch } from "react-redux";
import { getTodayDate } from "common/helpers";
// import { convertFromRaw } from "draft-js";
import { convertToRaw } from "draft-js";

const JournalEditor = ({ date }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // setEditorState(EditorState.createWithContent(state));

  const editor = useRef(null);
  function focusEditor() {
    editor.current.focus();
  }
  const dispatch = useDispatch();

  const onChange = (state) => {
    const content = convertToRaw(state.getCurrentContent());
    dispatch(saveJournal(content, getTodayDate()));
    setEditorState(state);
  };

  return (
    <div className="Editor" onClick={focusEditor}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={onChange}
        placeholder="Write something!"
      />
    </div>
  );
};

export default JournalEditor;
