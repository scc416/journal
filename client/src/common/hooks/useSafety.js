import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNow } from "common/helpers";
import { lock } from "features/safety/safetySlice";
const useSafety = () => {
  const { alarm, locked } = useSelector(({ safety: { alarm, locked } }) => {
    return { alarm, locked };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!locked) {
      const t = setInterval(() => {
        if (getNow() > alarm) dispatch(lock);
        console.log(getNow(), alarm);
      }, 1000);
      return () => clearInterval(t);
    }
  }, [locked]);

  return locked;
};

export default useSafety;
