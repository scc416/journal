import { TextArea } from "@blueprintjs/core";

const Title = ({ titleRef, keyUpHandler, keyDownHandler }) => {
  return (
    <TextArea
      large={true}
      placeholder="Title"
      maxLength={60}
      inputRef={titleRef}
      onKeyDown={keyDownHandler}
      onKeyUp={keyUpHandler}
    />
  );
};

export default Title;
