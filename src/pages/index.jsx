import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import Suggetions from "../components/Suggetion.js";
import EnterMessage from "../components/EnterMessage";
import data from "../components/data.json";
import Feedback from "../components/Feedback";
import SentMessage from "../components/SentMessage";
import ReceivedMessage from "../components/ReceivedMessage";
import Loader from "../components/Loader";
import Divider from "../components/Divider";

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastMessageType, setLastMessageType] = useState(null);
  const [activeSuggestion, setActiveSuggestion] = useState(data[0]?.message);
  const [clickedSuggestions, setClickedSuggestions] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessageClick = async (messageText) => {
    setIsLoading(true);
    const foundMessage = data.find((item) => item.message === messageText);
    if (foundMessage) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: messageText, type: "sent" },
        {
          text: foundMessage.response,
          type: "received",
          chartData: foundMessage.chartData,
          chartType: foundMessage.chartType,
          topic: foundMessage.topic,
          tips: foundMessage.tips,
          responseData: foundMessage.responseData,
        },
      ]);

      setClickedSuggestions((prevClicked) => [...prevClicked, messageText]);

      if (clickedSuggestions.length === data.length - 1) {
        setActiveSuggestion(null);
      } else {
        const nextActiveIndex = data.findIndex(
          (item) => !clickedSuggestions.includes(item.message)
        );
        setActiveSuggestion(data[nextActiveIndex]?.message);
      }

      setIsLoading(false);
    } else {
      console.error("Message not found in data.json");
    }
  };

  const handleSendMessage = (typedMessage) => {
    setMessages([
      ...messages,
      { text: typedMessage, type: "sent" },
      { text: "You might looking for these below suggetions!", type: "received" },
    ]);
    setLastMessageType("typed");
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="min-h-[98vh] grid content-end gap-4 md:mx-8 md:px-8 lg:mx-24 lg:px-20 xl:mx-44 xl:px-40 2xl:mx-52 2xl:px-48 min-[280px]:px-2 overflow-y-auto">
      <div className="mt-4 space-y-2">
        {messages.map((message, index) => (
          <div key={index}>
            {message.type === "sent" && <SentMessage message={message} />}
            {message.type === "received" && (
              <ReceivedMessage
                message={message}
                clickedSuggestions={clickedSuggestions}
                refreshPage={refreshPage}
              />
            )}
          </div>
        ))}
        {isLoading && <Loader />}
        <div ref={messagesEndRef} />
      </div>
      {clickedSuggestions.length !== 8 && messages.length > 0 && (
        <Divider content={"You might also want to know"} />
      )}

      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 min-[280px]:grid-cols-1 gap-2">
        {clickedSuggestions.length !== 8 || lastMessageType === "typed"
          ? data.map((item) => (
              <Suggetions
                key={item.message}
                message={item.message}
                onClick={() => handleMessageClick(item.message)}
                activeSuggestion={activeSuggestion}
                setActiveSuggestion={setActiveSuggestion}
                clickedSuggestions={clickedSuggestions}
                setClickedSuggestions={setClickedSuggestions}
              />
            ))
          : null}
      </div>
      <div
        className={`${
          messages.length > 0 ? "bg-base-200 rounded-md p-4 grid gap-4" : ""
        }`}
      >
        {messages.length > 0 && (
          <div className="flex justify-center">
            <Feedback />
          </div>
        )}
        <EnterMessage
          onEnterMessage={handleSendMessage}
          className={messages.length === 0 ? "bg-base-200 rounded-md p-4" : ""}
        />
      </div>
    </div>
  );
}

export default App;
