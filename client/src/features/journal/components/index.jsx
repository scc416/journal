import "./Journal.css";
import LogoutButton from "features/auth/LogoutButton";
import Calendar from "./Calendar/";
import Editor from "./Editor/";
import { useParams } from "react-router-dom";
import useJournal from "common/hooks/useJournal";
import { InputGroup, FormGroup } from "@blueprintjs/core";
import { useRef } from "react";
import Loading from "features/loading/Loading";

const Journal = () => {
  const { date } = useParams();
  const { validDate, disabledDays, minDate, value, gotData } = useJournal(date);
  const search = useRef();

  return (
    <>
      <LogoutButton />
      {gotData && validDate ? (
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
          <Editor date={date} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Journal;
