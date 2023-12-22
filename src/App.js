import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Password from "./component/Password";
import CardPay from "./component/CardPay";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import Home from "./screen/Home";
import LevelPick from "./screen/LevelPick";
import CustomLevel from "./screen/CustomLevel";
import Landing from "./screen/Landing";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/pin" element={<Password />} />
      <Route path="/pickLevel" element={<LevelPick />} />
      <Route path="/home" element={<Home />} />
      <Route path="/card-pay" element={<CardPay />} />
      <Route path="/custom-level" element={<CustomLevel />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
