import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm here to help you provide train schedule information. Please select from following options?"
    ),
  ],
  botName: "Train Information Bot",
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
