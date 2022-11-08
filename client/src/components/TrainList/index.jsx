import React from "react";
import "./TrainList.css";
import { useTrainList } from "../../hooks";

const TrainList = (props) => {
  const { trainList } = useTrainList(props.state.selectedStation);
  const trains =
    trainList.length > 0 ? (
      trainList.map((train) => {
        return (
          <li key={train.Traincode[0]} className="list-item">
            <div className="list-item-name">
              <ul>
                <li key={train.Stationfullname[0]}>
                  {`Station: ${train.Stationfullname[0]}`}
                </li>
                <li key={train.Destination[0]}>
                  {`Destionation: ${train.Destination[0]}`}
                </li>
                <li key={train.Exparrival[0]}>
                  {`Arrival: ${train.Exparrival[0]}`}
                </li>
                <li key={train.Expdepart[0]}>
                  {`Departure: ${train.Expdepart[0]}`}
                </li>
              </ul>
            </div>
          </li>
        );
      })
    ) : (
      <div>No trains are running in next 90 minutes!</div>
    );
  if (trains) {
    return <ul className="list">{trains}</ul>;
  } else {
    return <div>loading...</div>;
  }
};

export default TrainList;
