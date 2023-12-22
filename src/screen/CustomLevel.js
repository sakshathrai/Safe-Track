import React, { useState, useEffect } from "react";
import "../css/CustomLevel.css";
import { useNavigate } from "react-router-dom";

function getCustom() {
  return localStorage.getItem("custom");
}
function CustomLevel() {
  const navigate = useNavigate();
  const [services, setServices] = useState(
    (getCustom() && JSON.parse(getCustom())) || {
      1: ["num", "recharge", "upi", "acc", "scan"],
      2: ["Electricity", "Education", "credit", "water", "cylinder"],
      3: ["Loan-repay", "donate", "postpaid", "Ticket", "flight"],
    }
  );
  const [selected, setSelected] = useState("");
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
  const [removed, setRemoved] = useState([]);

  function handleRemove(i, val) {
    services[i] = services[i].filter((v) => v != val);
    setServices({ ...services });
    removed.push(val);
  }

  function handleAdd(i) {
    if (selected && selected != "") {
      services[i].push(selected);
      const newRemoved = removed.filter((v) => v != selected);
      setSelected("");
      setRemoved([...newRemoved]);
    }
  }
  return (
    <div className="custom-container">
      <div className="levels removed">
        {removed.map((v) => {
          const imgPath = `icons/${v}.png`;

          return (
            <div
              className={`card removed-card ${
                v == selected ? "selected-for-add" : ""
              }`}
              key={v}
              onClick={() => setSelected(v)}
            >
              <img
                src={imgPath}
                alt={`Image for ${v}`}
                className="servic-icon"
              />
              <h2>{Headings[v]}</h2>
              <button>x</button>
            </div>
          );
        })}
      </div>
      <div className="custom-area">
        {["1", "2", "3"].map((val) => {
          return (
            <div className="levels">
              {services[val].map((v) => {
                const imgPath = `icons/${v}.png`;

                return (
                  <div className="card" key={val}>
                    <img
                      src={imgPath}
                      alt={`Image for ${val}`}
                      className="servic-icon"
                    />
                    <h2>{Headings[val]}</h2>
                    <button onClick={() => handleRemove(val, v)}>x</button>
                  </div>
                );
              })}
              {removed.length ? (
                <div className={"card add"} onClick={() => handleAdd(val)}>
                  +
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <div className="level-buttons">
        <button onClick={() => navigate("/home")}>Back</button>
        <button
          onClick={() => {
            localStorage.setItem("custom", JSON.stringify(services));
            navigate("/home");
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default CustomLevel;
