import React from "react";
import "./StationList.css";
import useStationList from "./useStationList";

const StationList = (props) => {
  const { loading, stationList, trainList, handleStationClick } =
    useStationList();

  const stations =
    stationList.length > 0 &&
    stationList.slice(0, 10).map((station) => {
      return (
        <li key={station.StationId[0]} className="list-item">
          <div
            className="list-item-name"
            onClick={() => handleStationClick(station.StationDesc[0])}
          >
            {station.StationDesc[0]}
          </div>
        </li>
      );
    });

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
  if (!loading) {
    return (
      <>
        <ul className="list">{stations}</ul>
        {trains && <ul className="list">{trains}</ul>}
      </>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default StationList;
