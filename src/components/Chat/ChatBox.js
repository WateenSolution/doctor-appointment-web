import React, { useState, useEffect } from "react";
import io from "socket.io-client";

export const Chat = ({ stationData }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  let socket;

  useEffect(() => {
    // Initialize the socket connection
    socket = io();

    // Listen for incoming messages from the server
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Emit the user message to the server
      socket.emit("user-message", message);
      // Clear the input field after sending
      setMessage("");
    }
  };

  return (
    <div>
      <h1>Chatting</h1>
      <input
        type="text"
        id="message"
        placeholder="Enter Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button id="sendBtn" onClick={handleSendMessage}>
        Send
      </button>
      <div id="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
};
