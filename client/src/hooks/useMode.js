import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "actions/mode";
import { useEffect } from "react";
import { getTodayDate } from "helpers";
import { getCurrentUsers } from "actions/users";

const useMode = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector(({ mode: { darkMode } }) => darkMode);

  const toggleDarkMode = () => dispatch(toggleMode);

  return { darkMode, toggleDarkMode };
};

export default useMode;
