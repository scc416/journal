import "./Journal.css";
import LogoutButton from "features/auth/LogoutButton";
import { useParams } from "react-router-dom";
import useJournal from "common/hooks/useJournal";
import Loading from "features/loading/Loading";
import Main from "./Main";

const Journal = () => {
  const { date } = useParams();
  const { validDate, disabledDays, minDate, value, gotData } = useJournal(date);

  return (
    <>
      <LogoutButton />
      {gotData && validDate ? (
        <Main {...{ disabledDays, minDate, value, date }} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Journal;
