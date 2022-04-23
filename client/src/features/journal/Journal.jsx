import "./Journal.css";
import LogoutButton from "features/auth/LogoutButton";
import Calendar from "./Calendar";
import Editor from "./Editor";
import { useParams } from "react-router-dom";
import useJournal from "common/hooks/useJournal";

const Journal = () => {
  const { date } = useParams();
  const { validDate, disabledDays, minDate, defaultValue } = useJournal(date);

  return (
    <>
      <LogoutButton />
      {validDate && (
        <div className="Journal">
          <Calendar {...{ disabledDays, minDate, defaultValue }} />
          <Editor date={date} />
        </div>
      )}
    </>
  );
};

export default Journal;
