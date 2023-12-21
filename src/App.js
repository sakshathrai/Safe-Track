import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Password from "./component/Password";
import CardPay from "./component/CardPay";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/pin" element={<Password />}></Route>
        <Route exact path="/card-pay" element={<CardPay />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
