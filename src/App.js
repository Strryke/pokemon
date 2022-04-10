import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Login from "./Login";
import User from "./User";
import Pokedex from "./Pokedex";
import NewPokemon from "./NewPokemon";
import { SignOut } from "./firebase";

function App() {
  const { pathname } = useLocation();

  function Navbar() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top justify-content-center border-bottom shadow-sm"
        style={{ backgroundColor: "lightgray" }}
      >
        <div className="container justify-content-center">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active btn"
                aria-current="page"
                to="pokedex"
              >
                Pokedex
              </Link>
              <Link
                className="nav-link active btn"
                aria-current="page"
                to="newpokemon"
              >
                Catch Pokemon
              </Link>
              <SignOut />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <div className="app container justify-content-centre">
      <div className="my-5 py-5">
        {pathname !== "/" && <Navbar />}
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
