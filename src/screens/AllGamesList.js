import {useState, useEffect} from 'react'
import { getGameList } from '../services/GameListService';
import GameScreen from './GameScreen';

const AllGamesList = () => {
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        getGameList().then(({data}) => {
            console.log({data});
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
        <div>
            <h1>List of Games...</h1>

            {
                gameList.map((game, index) => {
                    if(index!==0)
                    return <GameScreen key={index} game={game} />
                })
            }
        </div>
  )
}

export default AllGamesList
