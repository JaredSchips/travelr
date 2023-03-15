import React, { useState } from "react";
import image from "./globe.png";

const DiscussionBoard = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const message = e.target.message.value;
    setMessages([...messages, { username, message }]);
    e.target.username.value = "";
    e.target.message.value = "";
    const newMessage = {
      username: username,
      message: message,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
    e.target.reset();
  };

  return (
    
    <div className=" mb-10 ">
      <div className="flex justify-center">
        <img alt="" className="h-20 w-20" src={image} />
      </div>

      <div className="discussion-board mt-8 space-y-6 border-gray-600 ">
        <h1 className="flex justify-center">Welcome to the Chat!</h1>
        <form onSubmit={handleMessageSubmit} className="space-y-px">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="m-5 text-white-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <input
            type="text"
            name="message"
            placeholder="Type your message here"
            className="m-5 text-white-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <br />
          <button
            type="submit"
            className="m-5 text-white-600 focus:ring-purple-500 border-gray-300 hover:bg-black-700 rounded-lg"
          >
            Submit
          </button>
        </form>
        <hr />
        {messages.map((message, index) => (
          <div className="bg-amber-50 border border-slate-300" key={index}>
            <p>
              <strong className="font-serif">{message.username}</strong> at{" "}
              {message.timestamp.toLocaleString()}:<br />
              {message.message}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default DiscussionBoard;
