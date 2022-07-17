import {useEffect, useState} from "react";
import { getGameList } from "../services/GameListService";
import '../css/results.css';

const ResultsContainer = ({inputText}) => {
	const [gameList, setGameList] = useState([]);

	useEffect(() => {
		getGameList()
			.then(({ data }) => {
				setGameList(data);
			})
			.catch((e) => console.error(e));
	}, []);

	const newGameList = gameList
		.filter((game, index) => {
			if (index !== 0) return game;
		})
		.map((game) => {
			return game;
		});
	

	return (
		<div>
			{
				newGameList.filter((game) => {
					if (inputText == "")
						return "";
					else if (game.title.toLowerCase().includes(inputText.toLowerCase())) {
						return game;
					}
				}).map((game, index) => {
					return <p className="result-title" key={index}>{game.title}</p>
				})
			}
		</div>);
};

export default ResultsContainer;
