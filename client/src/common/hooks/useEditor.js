import { useState, useRef, useEffect } from "react";
import { EditorState, RichUtils } from "draft-js";
import {
  saveJournal,
  deleteJournal,
  clearStatus,
  showSavedTimeout,
} from "features/journal/journalSlice";
import { useDispatch, useSelector } from "react-redux";
import { convertFromRaw, convertToRaw } from "draft-js";
import { countWords, formatDate } from "common/helpers";
import moment from "moment";

const styles = ["BOLD", "ITALIC", "UNDERLINE"];
const lists = [
  { style: "ordered-list-item", icon: "numbered-list" },
  { style: "unordered-list-item", icon: "properties" },
];

const useEditor = (date) => {
  const { data, saved } = useSelector(({ journals: { data, saved } }) => {
    return { data, saved };
  });

  const titleRef = useRef();

  const titleKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const titleKeyUpHandler = (e) => {
    const val = e.target.value;
    titleRef.current.value = val.replace(/\n/g, " ");
    titleRef.current.height = "auto";
    titleRef.current.height = titleRef.current.scrollHeight + "px";
    onChange();
  };

  const [editorState, setEditorState] = useState(() =>
    date in data
      ? EditorState.createWithContent(convertFromRaw(data[date].content))
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
      const content = convertFromRaw(data[date].content);
      const state = EditorState.createWithContent(content);
      setEditorState(state);
      updateWordCount(state);

      updateTitle(data[date].title);
    } else {
      setEditorState(() => EditorState.createEmpty());
      updateWordCount();
      updateTitle("");
    }
  }, [date]);

  const editor = useRef(null);
  const focusEditor = () => editor.current.focus();
  const dispatch = useDispatch();

  const onChange = (s) => {
    const state = s || editorState;
    const content = state.getCurrentContent();
    const isEmpty = !content.hasText();
    const title = titleRef.current.value;

    if (isEmpty && !title) {
      dispatch(deleteJournal(date));
    } else {
      const rawContent = convertToRaw(content);
      dispatch(
        // saveJournal(rawContent, formatDate(moment().subtract(20, "days")), title)
        saveJournal(rawContent, date, title)
      );
    }
    setEditorState(state);
    updateWordCount(state);
  };

  const updateTitle = (str) => (titleRef.current.value = str);

  const mouseDownHandler = (style, list) => {
    if (!list)
      return () => {
        setEditorState((prev) => RichUtils.toggleInlineStyle(prev, style));
      };

    return () => {
      setEditorState((prev) => RichUtils.toggleBlockType(prev, style));
    };
  };

  useEffect(() => {
    if (saved) {
      const t = setTimeout(() => dispatch(clearStatus), showSavedTimeout);
      return () => clearTimeout(t);
    }
  }, [saved]);

  return {
    focusEditor,
    editor,
    editorState,
    onChange,
    mouseDownHandler,
    styles,
    lists,
    wordCount,
    titleRef,
    titleKeyDownHandler,
    titleKeyUpHandler,
    saved,
  };
};

export default useEditor;
