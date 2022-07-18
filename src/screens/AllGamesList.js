import '../css/AllGameList.css';
import { useState, useEffect } from 'react'
import { getGameList } from '../services/GameListService';
import GameScreen from './GameScreen';

const AllGamesList = () => {
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        getGameList().then(({data}) => {
            // console.log({data});
            setGameList(data);
        })
    }, [])

    // if the length of the game list is 0 then it will
    //display loading message
    
    if (!gameList.length)
    {
        return <h1>Loading ...</h1>
    }

    return (
        <div className='main-game'>
            <h1 className='heading font-effect-shadow-multiple'>List of All Games</h1>
            <div className='game-list'>
                {
                    // sort function
                    // sort((game1, game2) => {
                    //     return (game1.platform > game2.platform ? 1 : -1);
                    // }).
                    
                    gameList.filter((game, index) => {
                        if (index !== 0)
                            return game;
                    }).map((game, index) => {
                        return <GameScreen key={index} game={game} />
                    })
                }
            </div>
        </div>
  )
}

export default AllGamesList
