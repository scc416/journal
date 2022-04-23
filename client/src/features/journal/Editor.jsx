import { useState, useEffect, useRef } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import moment from "moment";
import { saveJournal, getJournals } from "./journalSlice";
import { useDispatch } from "react-redux";
import { convertFromRaw } from "draft-js";

const JournalEditor = ({ date }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const dispatch = useDispatch();
  // setEditorState(EditorState.createWithContent(state));

  useEffect(() => {
    dispatch(getJournals());

  }, []);

  const editor = useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  const onChange = (state) => {
    setEditorState(state);
    saveJournal(state, moment());
  };

  return (
    <div
      style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
      onClick={focusEditor}
    >
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
