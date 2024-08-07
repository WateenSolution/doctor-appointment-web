import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import { AppHeading } from "../../components";

const Chat = () => {
  const location = useLocation();
  const { user_id, username, doctor_name, doctor_image } = location.state || {};

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojis, setShowEmojis] = useState(false);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io("http://localhost:8001");

    socketRef.current.on("message", (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const messageData = {
        user_id,
        doctor_name,
        message,
      };
      socketRef.current.emit("user-message", messageData);
      setMessage("");
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    setShowEmojis(false);
  };

  return (
    <div>
      <AppHeading title="Live Chat" titleFontWeight={800} dateCheck={true} />
      <div className="chat-container">
        <div className="chat-header">
          <img src={doctor_image} alt={username} className="doctor-image" />
          <p className="doctor-name">{username}</p>
        </div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${
                msg.user_id === user_id ? "my-message" : "other-message"
              }`}
            >
              <strong>{msg.doctor_name}:</strong> {msg.message}
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <button
            className="emoji-btn"
            onClick={() => setShowEmojis(!showEmojis)}
          >
            😊
          </button>
          {showEmojis && (
            <div className="emoji-picker-container">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
          <input
            type="text"
            className="chat-input"
            placeholder="Enter your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="chat-send-btn" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
