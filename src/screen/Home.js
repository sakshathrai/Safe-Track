import React, { useEffect, useState } from "react";

import "../css/home.css";
import { useNavigate } from "react-router-dom";
function getLevel() {
  return localStorage.getItem("level");
}
function Home() {
  const navigate = useNavigate();
  const [level, setLevel] = useState(getLevel);
  const services = {
    1: ["upi", "num", "acc", "recharge", "scan"],
    2: ["Electricity", "Education", "credit", "water", "cylinder"],
    3: ["Loan-repay", "donate", "postpaid", "Ticket", "Flight"],
  };
  const [showService, setShowServices] = useState(services[level]);
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
  useEffect(() => {
    setLevel(localStorage.getItem("level"));
    setShowServices(services[level]);
  });
  return (
    <div className="home-container">
      <div className="home-header">
        <button>Account Balance</button>
        <button onClick={() => navigate("/custom-level")}>Custom Level</button>
        <button>Add Card</button>
        <button>Name</button>
      </div>
      {showService.map((v) => {
        return (
          <div className="card" key={v}>
            <i className="fas fa-qrcode"></i>
            <h2>{Headings[v]}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
