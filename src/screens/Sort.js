import { useState, useReducer, useEffect } from "react";
import { getGameList } from "../services/GameListService";
import GameScreen from "./GameScreen";
import "../css/sort.css";

const Sort = () => {
	const [gameList, setGameList] = useState([]);
	// const [newList, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		getGameList().then(({ data }) =>
			setGameList(
				data.filter((game, index) => {
					if (index !== 0) return game;
				})
			)
		);
	}, []);

	const handleOnChange = (event) => {
		switch (event.target.value) {
			case "title":
				setGameList(
					gameList
						.filter((game, index) => {
							if (index !== 0) return game;
						})
						.sort((game1, game2) => (game1.title > game2.title ? 1 : -1))
				);
				break;
			case "platform":
				setGameList(
					gameList
						.filter((game, index) => {
							if (index !== 0) return game;
						})
						.sort((game1, game2) => (game1.platform > game2.platform ? 1 : -1))
				);
				break;
			case "score":
				setGameList(
					gameList
						.filter((game, index) => {
							if (index !== 0) return game;
						})
						.sort((game1, game2) => (game1.score > game2.score ? 1 : -1))
				);
				break;
			default:
				setGameList([]);
		}
	};
	return (
		<div>
			<div className="sort">
				<h2>Select options to sort it on the basis of "PLATFORM, TITLE, SCORE", according to your choice.</h2>
				<select className="sort-option" onChange={handleOnChange}>
					<option value="none">--None--</option>
					<option value="title">Title</option>
					<option value="platform">Platform</option>
					<option value="score">Score</option>
				</select>
			</div>

			<div className="game-list">
				{
					// console.log(document.getElementsByTagName(select).value)
					gameList.map((game, index) => {
						return <GameScreen key={index} game={game} />;
					})
				}
			</div>
		</div>
	);
};

export default Sort;
