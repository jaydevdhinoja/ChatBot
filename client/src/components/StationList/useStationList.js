import { useState, useEffect } from "react";
import axios from "axios";
const useStationList = () => {
  const [loading, setLoading] = useState(true);
  const [stationList, setStationList] = useState([]);
  const [trainList, setTrainList] = useState([]);
  const [selectedStation, setSelectedStation] = useState("");

  useEffect(() => {
    const loadStationList = () => {
      setLoading(true);
      try {
        axios.get("http://localhost:3001/getAllStations").then((res) => {
          setLoading(false);
          setStationList(res.data.ArrayOfObjStation.objStation);
        });
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    loadStationList();
  }, []);

  const toDate = (dStr, format) => {
    let now = new Date();
    const trainTime = Number(dStr.replace(":", ""));
    const currentTime = Number(
      now.toTimeString().substring(0, 5).replace(":", "")
    );

    if (currentTime < trainTime || trainTime.toString().length === 2) {
      now.setDate(now.getDate() + 1);
    }
    now.setHours(dStr.substr(0, dStr.indexOf(":")));
    now.setMinutes(dStr.substr(dStr.indexOf(":") + 1));
    now.setSeconds(0);
    return now;
  };
  const handleStationClick = (selectedStation) => {
    try {
      setSelectedStation(selectedStation);
      axios
        .get(`http://localhost:3001/getStationData/${selectedStation}`)
        .then((res) => {
          const sortData = res.data.ArrayOfObjStationData.objStationData.sort(
            (a, b) => toDate(a.Exparrival[0]) - toDate(b.Exparrival[0])
          );
          setTrainList(sortData);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    loading,
    stationList,
    trainList,
    selectedStation,
    setSelectedStation,
    handleStationClick,
  };
};

export default useStationList;
