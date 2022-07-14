import { useState, useEffect } from "react";
import { getGameList } from "../services/GameListService";

const PlatformScreen = () => {
	const [gameList, setGameList] = useState([]);
	
  	useEffect(() => {
    	getGameList()
      .then(({ data }) => {
        setGameList(data);
      })
      .catch((e) => console.error(e));
		}, []);
	
	if (!gameList.length)
	return <h1>Loading ... </h1>;
	
	return (
		<div>
			{
				gameList.map((game, index) => {
					if (index !== 0)
						return game;
				})
			}
	</div>);
};

export default PlatformScreen;
