import "./Editor.css";
import { Editor } from "draft-js";
import Title from "./Title";
import useEditor from "common/hooks/useEditor";
import Toolbar from "./Toolbar";
import { getLongDate } from "common/helpers";

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
      <div>
        <div>{getLongDate(date)}</div>
        <Title
          {...{
            titleRef: titleRef,
            keyDownHandler: titleKeyDownHandler,
            keyUpHandler: titleKeyUpHandler,
          }}
        />
        <Editor
          {...{
            onChange,
            editorState,
            ref: editor,
            placeholder: "How was your day?",
            onClick: focusEditor,
          }}
        />
      </div>
      <Toolbar {...{ saved, mouseDownHandler, styles, lists, wordCount }} />
    </div>
  );
};

export default JournalEditor;
