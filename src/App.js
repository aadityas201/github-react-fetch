import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
