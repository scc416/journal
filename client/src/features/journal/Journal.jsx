import "./Journal.css";
import LogoutButton from "features/auth/LogoutButton";
import Calendar from "./Calendar";
import Editor from "./Editor";
import { useParams } from "react-router-dom";
import useJournal from "common/hooks/useJournal";
import { InputGroup, FormGroup } from "@blueprintjs/core";
import { useRef } from "react";

const Journal = () => {
  const { date } = useParams();
  const { validDate, disabledDays, minDate, value } = useJournal(date);
  const search = useRef();

  return (
    <>
      <LogoutButton />
      {validDate && (
        <div className="Journal">
          <div className="calendar-container">
            <FormGroup>
              <InputGroup
                large={true}
                inputRef={search}
                placeholder="Search..."
              />
            </FormGroup>
            <Calendar {...{ disabledDays, minDate, value }} />
          </div>
          <div className="Editor-Container">
            <Editor date={date} />
          </div>
        </div>
      )}
    </>
  );
};

export default Journal;
