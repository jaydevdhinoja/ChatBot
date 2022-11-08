class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleListStations = () => {
    const message = this.createChatBotMessage("getting all stations", {
      widget: "stationList",
    });

    this.updateChatbotState(message);
  };

  handleTrainList = () => {
    const message = this.createChatBotMessage(
      "getting next 2 available trains",
      {
        widget: "trainList",
      }
    );

    this.updateChatbotState(message);
  };

  displayMessage() {
    const greetingMessage = this.createChatBotMessage(
      "Sorry, I don't know how to answer that"
    );
    this.updateChatbotState(greetingMessage);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
