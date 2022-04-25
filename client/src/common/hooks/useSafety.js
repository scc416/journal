import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isTimeup } from "common/helpers";
import { lock, unlock } from "features/safety/safetySlice";
const useSafety = () => {
  const { alarm, locked, username } = useSelector(
    ({ safety: { alarm, locked }, username }) => {
      return { alarm, locked, username };
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (username === "") dispatch(unlock);

    // eslint-disable-next-line
  }, [username]);

  useEffect(() => {
    if (!locked && username) {
      const t = setInterval(() => {
        if (isTimeup(alarm)) dispatch(lock);
      }, 5000);
      return () => clearInterval(t);
    }
    // eslint-disable-next-line
  }, [locked, alarm, username]);

  return locked;
};

export default useSafety;
