import "./ToggleDarkModeButton.css";
import Icon from "@mdi/react";
import { mdiBrightness3 } from "@mdi/js";
import { mdiBrightness7 } from "@mdi/js";
import { Button } from "@blueprintjs/core";

const ToggleDarkModeButton = ({ darkMode, toggleDarkMode }) => {
  const path = darkMode ? mdiBrightness7 : mdiBrightness3;
  return (
    <>
      <div className="DarkModeButton">
        <Button type="submit" onClick={toggleDarkMode}>
          <Icon path={path} size={1} />
        </Button>
      </div>
    </>
  );
};

export default ToggleDarkModeButton;
