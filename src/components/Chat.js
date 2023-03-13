import React, { useState } from "react";

// function DiscussionBoard() {
//   // Define state to keep track of messages
//   const [messages, setMessages] = useState([]);

//   // Define function to handle form submissions
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const username = event.target.username.value;
//     const message = event.target.message.value;
//     const newMessage = {
//       username: username,
//       message: message,
//       timestamp: new Date(),
//     };
//     setMessages([...messages, newMessage]);
//     event.target.reset();
//   };

//   // Render the discussion board component
//   return (
//     <div className="chat">
//       <h2 className="welcome">Welcome to the Chat</h2>
//       <form onSubmit={handleSubmit}>
//         <label className="user">
//           Username:
//           <input type="text" name="username" required />
//         </label>
//         <br />
//         <label>
//           <div></div>
//           Message :
//           <textarea name="message" required />
//         </label>
//         <br />
//         <button type="submit">Post</button>
//       </form>
//       <hr />
//       {messages.map((message, index) => (
//         <div key={index}>
//           <p>
//             <strong>{message.username}</strong> at{" "}
//             {message.timestamp.toLocaleString()}:<br />
//             {message.message}
//           </p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

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
