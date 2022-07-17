import { useState, useEffect } from "react";
import { getGameList } from "../services/GameListService";
import "../css/Platform.css";

const PlatformScreen = () => {
	const [gameList, setGameList] = useState([]);
	// using useEffect to get the data array from the API.
	useEffect(() => {
		getGameList()
			.then(({ data }) => {
				// console.log(data);
				setGameList(data);
			})
			.catch((e) => console.error(e));
	}, []);

	const newGameList = [
		...new Set(
			gameList
				.filter((game, index) => {
					if (index !== 0) return game;
				})
				.map((game, index) => {
					return game.platform;
				})
		),
	];

	if (!gameList.length) return <h1>Loading ... </h1>;

	return (
		<div className="platform-screen">
			<h1 className="platform-heading font-effect-shadow-multiple">
				List of All Platforms
			</h1>
			<div className="platform-content">
				{
					newGameList.map((game, index) => {
					return (
						<p className="platform-card" key={index}>
							{game}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default PlatformScreen;
