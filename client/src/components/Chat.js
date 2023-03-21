import React, { useState, useEffect, useRef } from "react";
import image from "./globe.png";

const DiscussionBoard = ({ onIconsBlackChange }) => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (onIconsBlackChange) {
      onIconsBlackChange(true);
    }
    return () => {
      if (onIconsBlackChange) {
        onIconsBlackChange(false);
      }
    };
  }, [onIconsBlackChange]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    const newMessage = {
      username: "You",
      message: message,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
    e.target.reset();
  };

  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="" className="h-20 w-20" src={image} />
      </div>

      <div className="discussion-board mt-8 space-y-6 border border-gray-300 shadow-md p-4 rounded bg-white">
        <h1 className="flex justify-center text-2xl font-semibold mb-4">
          Travelr | Welcome to the Chat!
        </h1>
        <form onSubmit={handleMessageSubmit} className="space-y-px">
          <div className="flex items-center">
            <input
              type="text"
              name="message"
              placeholder="Type your message here"
              autoFocus
              className="w-full p-2 my-1 text-gray-700 bg-gray-200 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded"
            />
            <button
              type="submit"
              className="p-2 text-white bg-purple-500 hover:bg-purple-600 focus:ring-purple-500 focus:border-purple-500 border border-transparent rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
        <hr />
        <div className="messages-container overflow-y-auto h-96">
          {messages.map((message, index) => (
            <div
              className={`bg-gray-100 border border-gray-300 p-2 rounded mb-2 ${
                message.username === "You" ? "ml-auto" : ""
              }`}
              key={index}
            >
              <p className="mb-1">
                <strong className="font-semibold">{message.username}</strong>{" "}
                <span className="text-gray-500">
                  at {message.timestamp.toLocaleString()}:
                </span>
              </p>
              <p>{message.message}</p>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionBoard;
