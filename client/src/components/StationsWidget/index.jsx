import React from "react";

import "./StationsWidget.css";

const StationsWidget = (props) => {
  const options = [
    {
      text: "List all stations",
      handler: props.actionProvider.handleListStations,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="station-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return (
    <div key="stationWidget" className="station-options-container">
      {optionsMarkup}
    </div>
  );
};

export default StationsWidget;
