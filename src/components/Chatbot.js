import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { createChatBotMessage } from "react-chatbot-kit";
import { ActionProvider } from "./ActionProvider";
import { MessageParser } from "./MessageParser";

const botName = "PortfolioBot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}. Ask me about my projects!`),
  ],
};

const ChatbotComponent = () => {
  const [showBot, setShowBot] = useState(false);

  return (
    <div>
      {showBot && (
        <div className="chatbot-container">
          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        </div>
      )}
      <button className="chatbot-toggle" onClick={() => setShowBot(!showBot)}>
        💬 Chat
      </button>
    </div>
  );
};

export default ChatbotComponent;
