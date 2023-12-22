import React, { useEffect, useState } from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";
function getLevel() {
  return localStorage.getItem("level");
}
function Home() {
  const navigate = useNavigate();
  const [level, setLevel] = useState(getLevel);
  const [services, setServices] = useState({
    1: ["num", "recharge", "upi", "acc", "scan"],
    2: ["Electricity", "Education", "credit", "water", "cylinder"],
    3: ["Loan-repay", "donate", "postpaid", "Ticket", "Flight"],
  });
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
    const customServices = localStorage.getItem("custom");
    if (customServices) {
      setServices(JSON.parse(customServices));
    }
    setShowServices(services[level]);
  }, []);
  return (
    <div className="home-container">
      <div className="home-header">
        <button>Account Balance</button>
        <button onClick={() => navigate("/custom-level")}>Custom Level</button>
        <button>Add Card</button>
        <button>Name</button>
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
    </div>
  );
}

export default Home;
