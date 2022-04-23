import { useState, useEffect, useRef } from "react";
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import axios from "axios";
import moment from "moment";
import { saveJournal } from "./journalSlice";

const JournalEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const editor = useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/journals");
        console.log(data);
        // const parse = JSON.parse(info);
        // const state = convertFromRaw(parse);
        // setEditorState(EditorState.createWithContent(state));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

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
