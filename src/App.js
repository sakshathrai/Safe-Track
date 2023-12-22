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
import DebitInfo from "./screen/DebitInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/deptinfo" element={<DebitInfo />} />
        <Route exact path="/pickLevel" element={<LevelPick />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/card-pay" element={<CardPay />}></Route>
        <Route exact path="/custom-level" element={<CustomLevel />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route
          exact
          path="/setpin"
          element={<Password endPoint="setuppin" />}
        ></Route>
        <Route
          exact
          path="/verify"
          element={<Password endPoint="verifypin" />}
        ></Route>

        <Route exact path="/card-pay" element={<CardPay />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
