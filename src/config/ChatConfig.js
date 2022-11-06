import { createChatBotMessage } from "react-chatbot-kit";
import Stations from "../components/Stations";
const config = {
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm here to help you provide train schedule information. Please select from following options?",
      { widget: "listStations" }
    ),
  ],
  widgets: [
    {
      widgetName: "listStations",
      widgetFunc: (props) => <Stations {...props} />,
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
