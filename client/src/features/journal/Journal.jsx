import "./Journal.css";
import LogoutButton from "features/auth/LogoutButton";
import Calendar from "./Calendar";

const Journal = () => {
  return (
    <>
      <LogoutButton />
      <Calendar />
      Journal
    </>
  );
};

export default Journal;
