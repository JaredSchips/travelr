import React, { useState } from "react";



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
    <div className="discussion-board">
      <h1>Welcome to the Chat!</h1>
      <form onSubmit={handleMessageSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input
          type="text"
          name="message"
          placeholder="Type your message here"
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
      {messages.map((message, index) => (
        <div key={index}>
          <p>
            <strong>{message.username}</strong> at{" "}
            {message.timestamp.toLocaleString()}:<br />
            {message.message}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DiscussionBoard;
