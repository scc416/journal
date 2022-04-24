import { useState, useRef, useEffect } from "react";
import { EditorState, RichUtils, getText } from "draft-js";
import { saveJournal, deleteJournal } from "features/journal/journalSlice";
import { useDispatch, useSelector } from "react-redux";
import { convertFromRaw, convertToRaw } from "draft-js";
import { countWords } from "common/helpers";

const styles = ["BOLD", "ITALIC", "UNDERLINE"];
const lists = [
  { style: "ordered-list-item", icon: "numbered-list" },
  { style: "unordered-list-item", icon: "properties" },
];

const useEditor = (date) => {
  const data = useSelector(({ journals: { data } }) => data);

  const [editorState, setEditorState] = useState(() =>
    date in data
      ? EditorState.createWithContent(convertFromRaw(data[date]))
      : EditorState.createEmpty()
  );
  const [wordCount, setWordCount] = useState(
    countWords(editorState.getCurrentContent().getPlainText())
  );

  const updateWordCount = (state) => {
    if (state) {
      return setWordCount(countWords(state.getCurrentContent().getPlainText()));
    }
    setWordCount(0);
  };

  useEffect(() => {
    if (date in data) {
      const content = convertFromRaw(data[date]);
      setEditorState(EditorState.createWithContent(content));
      updateWordCount(EditorState.createWithContent(content));
    } else {
      setEditorState(() => EditorState.createEmpty());
      updateWordCount();
    }
  }, [date]);

  const editor = useRef(null);
  const focusEditor = () => editor.current.focus();
  const dispatch = useDispatch();

  const onChange = (state) => {
    const content = state.getCurrentContent();
    const isEmpty = !content.hasText();
    console.log(content.getPlainText());
    if (isEmpty) {
      dispatch(deleteJournal(date));
    } else {
      const rawContent = convertToRaw(content);
      dispatch(saveJournal(rawContent, date));
    }
    setEditorState(state);
    updateWordCount(state);
  };

  const mouseDownHandler = (style, list) => {
    if (!list)
      return () => {
        setEditorState((prev) => RichUtils.toggleInlineStyle(prev, style));
      };

    return () => {
      setEditorState((prev) => RichUtils.toggleBlockType(prev, style));
    };
  };

  return {
    focusEditor,
    editor,
    editorState,
    onChange,
    mouseDownHandler,
    styles,
    lists,
    wordCount,
  };
};

export default useEditor;
