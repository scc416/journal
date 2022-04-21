import Icon from "@mdi/react";
import { mdiBrightness3 } from "@mdi/js";
import { mdiBrightness7 } from "@mdi/js";

const ToggleDarkModeButton = ({ darkMode, toggleDarkMode }) => {
  const path = darkMode ? mdiBrightness7 : mdiBrightness3;
  return (
    <div class="DarkModeButton" onClick={toggleDarkMode}>
      <Icon path={path} size={1} />
    </div>
  );
};

export default ToggleDarkModeButton;
