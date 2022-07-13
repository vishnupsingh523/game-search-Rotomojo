import Axios from 'axios';

// getGameList function to get the list of all the games and exporting it
export const getGameList = () => {
    // fetching the data fom the given API link
    return Axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json");
}