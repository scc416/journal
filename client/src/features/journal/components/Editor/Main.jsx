import { Editor } from "draft-js";
import Title from "./Title";
import { getLongDate } from "common/helpers";
import Date from "./Date";

const Main = ({
  onChange,
  editorState,
  editor,
  focusEditor,
  date,
  titleRef,
  titleKeyDownHandler,
  titleKeyUpHandler,
}) => {
  return (
    <div>
      <Date date={date} />
      <Title
        {...{
          titleRef,
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
  );
};

export default Main;
