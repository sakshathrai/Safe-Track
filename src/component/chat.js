import React, { useState } from "react";

function ChatBot() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = () => {
    if (userInput.trim() !== '') {
      setMessages([
        ...messages,
        { type: 'user', text: userInput.trim() },
        { type: 'bot', text: 'Hello! How can I help you today?' } // Simulated bot response
      ]);
      setUserInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chatbot</h2>
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div key={index} className="message-container">
            <p className={message.type === 'user' ? 'user-message' : 'bot-message'}>
              {message.text}
            </p>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          className="user-input"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
