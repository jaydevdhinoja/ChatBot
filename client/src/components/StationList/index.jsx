import React from "react";
import "./StationList.css";
import { useStationList } from "../../hooks";

const StationList = (props) => {
  const { loading, stationList, selectedStation } = useStationList();
  const stations =
    stationList.length > 0 &&
    stationList.slice(0, 10).map((station) => {
      const selected =
        station.StationDesc[0] === selectedStation ? "list-item-selected" : "";

      return (
        <li key={station.StationId[0]} className="list-item">
          <div
            className={`list-item-name ${selected}`}
            onClick={() => {
              props.setState((state) => ({
                ...state,
                selectedStation: station.StationDesc[0],
              }));
              props.actionProvider.handleTrainList();
            }}
          >
            {station.StationDesc[0]}
          </div>
        </li>
      );
    });

  if (!loading) {
    return <ul className="list">{stations}</ul>;
  } else {
    return <div>loading...</div>;
  }
};

export default StationList;
