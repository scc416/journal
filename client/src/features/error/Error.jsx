import "./Error.css";
import { useDispatch, useSelector } from "react-redux";

const Error = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error.error);
  return <>{error && <div className="Error">{error}</div>}</>;
};

export default Error;
