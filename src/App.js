import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import User from "./User";
import Pokedex from "./Pokedex";

function App() {
  return (
    <div className="app container justify-content-centre">
      <Routes>
        <Route exact path="" element={<Login />} />
        <Route exact path="user" element={<User />} />
        <Route exact path="pokedex" element={<Pokedex />} />
      </Routes>
    </div>
  );
}

export default App;
