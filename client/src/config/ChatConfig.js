import { createChatBotMessage } from "react-chatbot-kit";
import StationsWidget from "../components/StationsWidget";
import StationList from "../components/StationList";

const config = {
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm here to help you provide train schedule information. Please select from following options?",
      { widget: "listStations" }
    ),
  ],
  state: {
    selectedStation: "",
  },
  widgets: [
    {
      widgetName: "listStations",
      widgetFunc: (props) => <StationsWidget {...props} />,
    },
    {
      widgetName: "stationList",
      widgetFunc: (props) => <StationList {...props} />,
      mapStateToProps: ["selectedStation"],
    },
  ],
  botName: "Train Schedule Bot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a",
    },
    chatButton: {
      backgroundColor: "#0f5faf",
    },
  },
};

export default config;
