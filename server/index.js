"use strict";
var axios = require("axios");
const express = require("express");
const cors = require("cors");
var parseStringPromise = require("xml2js").parseStringPromise;
let bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/getAllStations", async (req, res) => {
  try {
    var url =
      "http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML_WithStationType?StationType=D";

    const data = await axios.get(url);
    const parsedData = await parseStringPromise(data.data);
    res.status(200).json(parsedData);
  } catch (err) {
    throw err;
  }
});

app.get("/getStationData/:stationDesc", async (req, res) => {
  try {
    var url = `http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=${req.params.stationDesc}`;
    const data = await axios.get(url);
    const parsedData = await parseStringPromise(data.data);
    res.status(200).json(parsedData);
  } catch (err) {
    throw err;
  }
});

// 404 Error
app.use((req, res, next) => {
  res.status(404).send("Error 404!");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
