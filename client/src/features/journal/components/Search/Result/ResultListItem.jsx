import { Card, Elevation } from "@blueprintjs/core";

const ResultListItem = ({ date, title }) => {
  return (
    <Card interactive={true} elevation={Elevation.TWO}>
      <h5>{date}</h5>
      <p>{title}</p>
    </Card>
  );
};

export default ResultListItem;
