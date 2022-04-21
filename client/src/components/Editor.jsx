import { useState, useEffect, useRef } from "react";
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import axios from "axios";

const Editor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const editor = useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  useEffect(() => {
    (async () => {
      const {
        data: { info },
      } = await axios.get("/api/users");
      const parse = JSON.parse(info);
      const state = convertFromRaw(parse);
      setEditorState(EditorState.createWithContent(state));
    })();
  }, []);

  const onChange = (state) => {
    setEditorState(state);
    const content = convertToRaw(state.getCurrentContent());
    (async () => await axios.post("/api/users/", { state: content }))();
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

export default Editor;
