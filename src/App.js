import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Password from "./component/Password";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/pin" element={<Password />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
