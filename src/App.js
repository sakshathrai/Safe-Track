import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Password from "./component/Password";
import CardPay from "./component/CardPay";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/pin" element={<Password />}></Route>
        <Route exact path="/card-pay" element={<CardPay />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
