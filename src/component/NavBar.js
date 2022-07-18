import React from "react";
import { Link } from "react-router-dom";
import AllGamesList from "../screens/AllGamesList";
import "../css/NavBar.css";

const NavBar = () => {
	return (
		<>
			<header>
				<Link to="/game-search-Rotomojo/allGames">
					<img className="logo" src="images/game-logo.jpg" alt="GAME-LOGO" />
				</Link>
				<div className="nav-links">
					<li>
						<Link className="link" to="/game-search-Rotomojo/allGames">
							Home
						</Link>
					</li>
					<li>
						<Link className="link" to="/game-search-Rotomojo/Search">
							Search
						</Link>
					</li>

					<li>
						<Link className="link" to="/game-search-Rotomojo/platform">
							Platforms
						</Link>
					</li>
				</div>

				<Link className="creator" to="/game-search-Rotomojo/creator">
					<button>Creator</button>
				</Link>
			</header>
		</>
	);
};

export default NavBar;
