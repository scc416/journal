import "./Editor.css";
import { Editor } from "draft-js";
import { TextArea } from "@blueprintjs/core";
import useEditor from "common/hooks/useEditor";
import EditorButtons from "./EditorButtons";
import { getLongDate } from "common/helpers";
import { useRef } from "react";

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
  } = useEditor(date);

  const textAreaRef = useRef();

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const keyUpHandler = (e) => {
    const val = e.target.value;
    textAreaRef.current.value = val.replace(/\n/g, " ");
    textAreaRef.current.height = "auto";
    textAreaRef.current.height = textAreaRef.current.scrollHeight + "px";
  };

  return (
    <div className="Editor">
      <div>
        <div>{getLongDate(date)}</div>
        <TextArea
          large={true}
          placeholder="Title"
          maxLength={60}
          // growVertically={true}
          inputRef={textAreaRef}
          onKeyDown={keyDownHandler}
          onKeyUp={keyUpHandler}
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
      <div className="Editor-Toolbar">
        <EditorButtons {...{ mouseDownHandler, styles, lists }} />
        <div>{wordCount}</div>
      </div>
    </div>
  );
};

export default JournalEditor;
