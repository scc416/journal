import "./Editor.css";
import useEditor from "common/hooks/useEditor";
import Toolbar from "./Toolbar";
import Main from "./Main";

const JournalEditor = ({ date }) => {
  const {
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
  } = useEditor(date);

  return (
    <div className="Editor">
      <Main
        {...{
          onChange,
          editorState,
          editor,
          focusEditor,
          date,
          titleRef,
          titleKeyDownHandler,
          titleKeyUpHandler,
        }}
      />
      <Toolbar {...{ saved, mouseDownHandler, styles, lists, wordCount }} />
    </div>
  );
};

export default JournalEditor;
