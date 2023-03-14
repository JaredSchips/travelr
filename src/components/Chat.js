import React, { useState } from "react";
import image from './globe.png'

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
    <div className="mb-10">
    <div className="flex justify-center">
        <img 
            alt=""
            className="h-20 w-20"
            src={image}/>
    </div>


    <div className="discussion-board mt-8 space-y-6 border-gray-300">
      
      <h1>Welcome to the Chat!</h1>
      <form onSubmit={handleMessageSubmit} className="space-y-px">
        <input type="text" name="username" placeholder="Username" className="m-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"/>
        <input
          type="text"
          name="message"
          placeholder="Type your message here"
          lassName="font-medium ml-10 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
        />
        <button type="submit" className="m-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded">Submit</button>
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
    </div>
  );
};

export default DiscussionBoard;
