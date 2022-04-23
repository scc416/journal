import "./Journal.css";
import LogoutButton from "features/auth/LogoutButton";
import Calendar from "./Calendar";
import Editor from "./Editor";
import { useParams } from "react-router-dom";

const Journal = () => {
  const { date } = useParams();
  return (
    <>
      <LogoutButton />
      <div className="Journal">
        <Calendar defaultDate={date} />
        <Editor date={date} />
      </div>
    </>
  );
};

export default Journal;
