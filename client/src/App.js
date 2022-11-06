import "./App.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./config/ActionProvider";
import MessageParser from "./config/MessageParser";
import ChatConfig from "./config/ChatConfig";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={ChatConfig}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </header>
    </div>
  );
}

export default App;
