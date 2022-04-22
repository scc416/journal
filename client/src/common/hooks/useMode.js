import { useDispatch, useSelector } from "react-redux";
import { toggleMode, getMode } from "features/mode/modeSlice";
import { useEffect } from "react";

const useMode = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector(({ mode: { darkMode } }) => darkMode);

  const toggleDarkMode = () => dispatch(toggleMode());

  useEffect(() => {
    dispatch(getMode());
    // eslint-disable-next-line
  }, []);

  return { darkMode, toggleDarkMode };
};

export default useMode;
