import React, { useEffect, useState } from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";
import ChatBot from "../component/Chat";
function getLevel() {
  return localStorage.getItem("level");
}
function getCustom() {
  const custom = localStorage.getItem("custom");
  if (custom) {
    console.log(custom);
    return JSON.parse(custom);
  } else {
    return {
      1: ["Settings", "num", "recharge", "upi", "acc", "scan"],
      2: ["Electricity", "Education", "credit", "water", "cylinder"],
      3: ["Loan-repay", "donate", "postpaid", "Ticket", "Flight"],
    };
  }
}
function Home() {
  const [activechat, setActiveChat] = useState(false);
  const navigate = useNavigate();
  const [level, setLevel] = useState(getLevel);
  const [services, setServices] = useState(getCustom);
  const [showService, setShowServices] = useState(services[level]);
  function changeState() {
    setActiveChat(false);
  }
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
    Settings: "Account Settings",
  };

  useEffect(() => {
    setLevel(localStorage.getItem("level"));
    const customServices = localStorage.getItem("custom");
    if (customServices) {
      setServices(JSON.parse(customServices));
    }
    setShowServices(services[level]);
  }, []);

  useEffect(() => {
    setShowServices(services[level]);
  }, [level]);
  return (
    <div className="home-container">
      <div className="home-header">
        <button>Account Balance</button>
        <button onClick={() => navigate("/custom-level")}>Custom Level</button>
        <button>Add Card</button>
        <button>{localStorage.getItem("userName")}</button>
        <button onClick={() => navigate("/pickLevel")}>Change Level</button>
        <select
          onChange={(e) => {
            setLevel(e.target.value);
          }}
        >
          <option value="0" disabled selected>
            levels
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="services-container">
        {showService.map((v) => {
          const imgPath = `icons/${v}.png`;

          return (
            <div className="card" key={v}>
              <img
                src={imgPath}
                alt={`Image for ${v}`}
                className="servic-icon"
              />
              <h2>{Headings[v]}</h2>
            </div>
          );
        })}
      </div>
      <div className="fixed-chat-container">
        <button onClick={() => setActiveChat(!activechat)}>chat</button>
        {activechat ? <ChatBot fc={changeState} /> : ""}
      </div>
    </div>
  );
}

export default Home;
