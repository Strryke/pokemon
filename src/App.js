import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import User from "./User";
import Pokedex from "./Pokedex";
import NewPokemon from "./NewPokemon";
import { SignOut } from "./firebase";

function App() {
  return (
    <div className="app container justify-content-centre">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-white fixed-top justify-content-center border-bottom shadow-sm"
        style={{ backgroundColor: "lightgray" }}
      >
        <div class="container justify-content-center">
          <Link class="navbar-brand" to="/">
            Home
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link
                class="nav-link active btn"
                aria-current="page"
                to="pokedex"
              >
                Pokedex
              </Link>
              <Link class="nav-link active" aria-current="page" to="newpokemon">
                Catch Pokemon
              </Link>
              <SignOut />
            </div>
          </div>
        </div>
      </nav>
      <div className="my-5 py-5">
        <Routes>
          <Route exact path="" element={<Login />} />
          <Route exact path="user" element={<User />} />
          <Route exact path="pokedex" element={<Pokedex />} />
          <Route exact path="newpokemon" element={<NewPokemon />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
