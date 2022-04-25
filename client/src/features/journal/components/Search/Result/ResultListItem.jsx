import { Card, Elevation } from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";

const ResultListItem = ({ date, title }) => {
  const navigate = useNavigate();
  const clickHandler = () => navigate(`/journal/${date}`);

  return (
    <Card onClick={clickHandler} interactive={true} elevation={Elevation.TWO}>
      <h5>{date}</h5>
      <p>{title}</p>
    </Card>
  );
};

export default ResultListItem;
