import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import AllGamesList from "../screens/AllGamesList";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <img src="" alt="GAME-LOGO" />
          <div className="nav-links">
            <li>
              <Link className="link" to="/allGames">
                All Games
              </Link>
            </li>

            <li>
              <Link className="link" to="/platform">
                Platform
              </Link>
            </li>
          </div>
        </header>

        <Routes>
          <Route path="/allGames" element={<AllGamesList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default NavBar;
