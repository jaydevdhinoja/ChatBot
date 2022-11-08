import { useState, useEffect } from "react";
import { axiosInstance } from "../config/util";
export const useStationList = () => {
  const [loading, setLoading] = useState(true);
  const [stationList, setStationList] = useState([]);
  const [selectedStation, setSelectedStation] = useState("");

  useEffect(() => {
    const loadStationList = () => {
      setLoading(true);
      try {
        axiosInstance.get("/getAllStations").then((res) => {
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

  return {
    loading,
    stationList,
    selectedStation,
    setSelectedStation,
  };
};

export const useTrainList = (selectedStation) => {
  const [trainList, setTrainList] = useState([]);

  useEffect(() => {
    try {
      axiosInstance.get(`/getStationData/${selectedStation}`).then((res) => {
        if (
          res.data.ArrayOfObjStationData.objStationData.length > 0 &&
          res.data.ArrayOfObjStationData.objStationData.length > 2
        ) {
          setTrainList(
            res.data.ArrayOfObjStationData.objStationData.slice(0, 2)
          );
        } else setTrainList(res.data.ArrayOfObjStationData.objStationData);
      });
    } catch (error) {
      console.log(error);
    }
  }, [selectedStation]);

  return {
    trainList,
  };
};
