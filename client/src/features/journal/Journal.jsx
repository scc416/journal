import "./Journal.css";
import LogoutButton from "features/auth/LogoutButton";
import Calendar from "./Calendar";
import Editor from "./Editor";

const Journal = () => {
  return (
    <>
      <LogoutButton />
      <div>
        <Calendar />
        <Editor />
      </div>
    </>
  );
};

export default Journal;
