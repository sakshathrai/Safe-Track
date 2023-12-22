import React, { useState } from "react";
import "../css/chatBox.css";
function ChatBot({ fc }) {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [chatResponse, setChateResponse] = useState([]);
  const dataSet = {
    1: ["num", "recharge", "upi", "acc", "scan"],
    2: ["Electricity", "Education", "credit", "water", "cylinder"],
    3: ["Loan-repay", "donate", "postpaid", "Ticket", "Flight"],
  };
  const Headings = {
    upi: "Pay by UPI/QR",
    num: "Pay to Contacts",
    acc: "Pay to Bank-Acc",
    recharge: "Mobile Recharge",
    scan: "QR Code",
    Electricity: "Electricity Bill Payment",
    Education: "Education Fees",
    credit: "Credit Card PayMent",
    water: "Water",
    cylinder: "Book A Cylinder",
    "Loan-repay": "Loan-repay",
    donate: "donate",
    postpaid: "postpaid",
    Ticket: "Movie ticket",
    flight: "Flight ticket",
  };
  async function sendMessage() {
    const postData = { message: userInput };
    fetch("http://localhost:8080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        data.Actions.forEach((v) => {
          dataSet[1].forEach((val) => {
            setChateResponse([...chatResponse, val]);
          });
          dataSet[2].forEach((val) => {
            setChateResponse([...chatResponse, val]);
          });
          dataSet[3].forEach((val) => {
            setChateResponse([...chatResponse, val]);
          });
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="chat-container">
      <div className="close" onClick={fc}>
        X
      </div>
      <div className="chat-header">
        <h2>Chatbot</h2>
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div key={index} className="message-container">
            <p
              className={
                message.type === "user" ? "user-message" : "bot-message"
              }
            >
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
      <div className="response">
        {chatResponse.map((val, idx) => {
          const imgPath = `icons/${val}.png`;
          return (
            <div className="card" key={idx}>
              <img
                src={imgPath}
                alt={`Image for ${val}`}
                className="servic-icon"
              />
              <h2>{Headings[val]}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChatBot;
