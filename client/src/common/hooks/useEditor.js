import { useState, useRef, useEffect } from "react";
import { EditorState } from "draft-js";
import { saveJournal } from "features/journal/journalSlice";
import { useDispatch, useSelector } from "react-redux";
import { convertFromRaw, convertToRaw } from "draft-js";
import { getTodayDate } from "common/helpers";

const useEditor = (date) => {
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

  const readOnly = date !== getTodayDate();

  return { focusEditor, editor, editorState, onChange, readOnly };
};

export default useEditor;
