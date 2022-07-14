import React from "react";
import {Link } from "react-router-dom";
import AllGamesList from "../screens/AllGamesList";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <>
        <header>
          <Link to='/'><img className="logo" src="images/game-logo.jpg" alt="GAME-LOGO" /></Link>
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

          <Link className="creator" to="/creator"><button>Creator</button></Link>
        </header>
    </>
  );
};

export default NavBar;
