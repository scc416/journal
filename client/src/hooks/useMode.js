import { useDispatch, useSelector } from "react-redux";
import { toggleMode, getMode } from "actions/mode";
import { useEffect } from "react";

const useMode = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector(({ mode: { darkMode } }) => darkMode);

  const toggleDarkMode = () => dispatch(toggleMode());

  useEffect(() => {
    dispatch(getMode());
  }, []);

  return { darkMode, toggleDarkMode };
};

export default useMode;
