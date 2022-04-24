import "./ToggleDarkModeButton.css";
import { Button } from "@blueprintjs/core";

const ToggleDarkModeButton = ({ darkMode, toggleDarkMode }) => {
  const icon = darkMode ? "flash" : "moon";
  return (
    <>
      <div className="DarkModeButton">
        <Button onClick={toggleDarkMode} icon={icon} />
      </div>
    </>
  );
};

export default ToggleDarkModeButton;
