import "./ToggleDarkModeButton.css";
import Icon from "@mdi/react";
import { mdiBrightness3 } from "@mdi/js";
import { mdiBrightness7 } from "@mdi/js";
import { Button } from "@blueprintjs/core";

const ToggleDarkModeButton = ({ darkMode, toggleDarkMode }) => {
  const icon = darkMode ? "moon" : "flash";
  return (
    <>
      <div className="DarkModeButton">
        <Button onClick={toggleDarkMode} icon={icon} />
      </div>
    </>
  );
};

export default ToggleDarkModeButton;
