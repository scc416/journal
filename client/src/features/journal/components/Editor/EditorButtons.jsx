import { Button } from "@blueprintjs/core";

const EditorButtons = ({ mouseDownHandler, styles }) => {
  const Buttons = styles.map((style) => (
    <Button
      key={style}
      icon={style}
      minimal={true}
      onMouseDown={mouseDownHandler(style)}
    />
  ));
  return <div>{Buttons}</div>;
};

export default EditorButtons;
