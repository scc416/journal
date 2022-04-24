import { useState, useRef, useEffect } from "react";
import { Editor, EditorState } from "draft-js";
import { saveJournal } from "./journalSlice";
import { useDispatch, useSelector } from "react-redux";
import { convertFromRaw } from "draft-js";
import { convertToRaw } from "draft-js";

const JournalEditor = ({ date }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const data = useSelector(({ journals: { data } }) => data);
  useEffect(() => {
    if (date in data) {
      const content = convertFromRaw(data[date]);
      setEditorState(EditorState.createWithContent(content));
    } else {
      setEditorState(() => EditorState.createEmpty());
    }
  }, [date]);

  const editor = useRef(null);
  function focusEditor() {
    editor.current.focus();
  }
  const dispatch = useDispatch();

  const onChange = (state) => {
    const content = convertToRaw(state.getCurrentContent());
    setEditorState(state);
    dispatch(saveJournal(content, date));
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
