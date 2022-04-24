import { Button } from "@blueprintjs/core";

const EditorButtons = ({ mouseDownHandler, styles, lists }) => {
  const StyleButtons = styles.map((style) => (
    <Button
      key={style}
      icon={style}
      minimal={true}
      onMouseDown={mouseDownHandler(style)}
    />
  ));

  const ListButtons = lists.map(({ style, icon }) => (
    <Button
      key={style}
      minimal={true}
      icon={icon}
      onMouseDown={mouseDownHandler(style, true)}
    />
  ));

  return (
    <div className="Editor-Buttons">
      {StyleButtons}
      {ListButtons}
    </div>
  );
};

export default EditorButtons;
