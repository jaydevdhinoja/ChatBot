class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("all stations")) {
      this.actionProvider.handleListStations();
    } else {
      this.actionProvider.displayMessage();
    }
  }
}

export default MessageParser;
