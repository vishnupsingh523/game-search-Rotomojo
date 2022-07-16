import { useState, useEffect } from "react";
import { getGameList } from "../services/GameListService";

const PlatformScreen = () => {
  const [gameList, setGameList] = useState([]);
  //   const [newGameList, setNewGameList] = useState([]);

  let count = 0;
  let newGameList = [];
  // uusing useEffect to get the data array from the API.
  useEffect(() => {
    getGameList()
      .then(({ data }) => {
        setGameList(data);
      })
      .catch((e) => console.error(e));

    setTimeout(() => {
      
    newGameList = gameList.filter((game) => {
      if (count === 0) {
        count++;
        return ;
      } else return game;
    }, 3000)
	});
	  
    

    //   console.log(gameList)
  }, []);

  if (!newGameList.length) return <h1>Loading ... </h1>;

  return (
    <div>
      {
        //   newGameList.sort((game1, game2) => {

        // 		return  game1.platform - game2.platform;
        //   })
        console.log(newGameList)
      }
    </div>
  );
};

export default PlatformScreen;
