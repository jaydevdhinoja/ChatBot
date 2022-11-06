import React from "react";

import "./Stations.css";

const Stations = (props) => {
  const options = [{ text: "List all stations", handler: () => {}, id: 1 }];

  const optionsMarkup = options.map((option) => (
    <button
      className="station-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="station-options-container">{optionsMarkup}</div>;
};

export default Stations;
