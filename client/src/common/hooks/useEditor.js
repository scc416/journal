import { useState, useRef, useEffect } from "react";
import { EditorState, RichUtils } from "draft-js";
import { saveJournal, deleteJournal } from "features/journal/journalSlice";
import { useDispatch, useSelector } from "react-redux";
import { convertFromRaw, convertToRaw } from "draft-js";
import { getTodayDate } from "common/helpers";

const useEditor = (date) => {
  const data = useSelector(({ journals: { data } }) => data);

  const [editorState, setEditorState] = useState(() =>
    date in data
      ? EditorState.createWithContent(convertFromRaw(data[date]))
      : EditorState.createEmpty()
  );

  useEffect(() => {
    if (date in data) {
      const content = convertFromRaw(data[date]);
      setEditorState(EditorState.createWithContent(content));
    } else {
      setEditorState(() => EditorState.createEmpty());
    }
  }, [date]);

  const editor = useRef(null);
  const focusEditor = () => editor.current.focus();
  const dispatch = useDispatch();

  const readOnly = date !== getTodayDate();

  const onChange = (state) => {
    if (!readOnly) {
      const content = state.getCurrentContent();
      const isEmpty = !content.hasText();
      if (isEmpty) {
        dispatch(deleteJournal(date));
      } else {
        const rawContent = convertToRaw(content);
        dispatch(saveJournal(rawContent, date));
      }
      setEditorState(state);
    }
  };

  const style = ["BOLD", "ITALIC", "UNDERLINE"];
  const clickHandler = (e) => {
    setEditorState((prev) => RichUtils.toggleInlineStyle(prev, "BOLD"));
  };

  return {
    focusEditor,
    editor,
    editorState,
    onChange,
    readOnly,
    clickHandler,
  };
};

export default useEditor;
