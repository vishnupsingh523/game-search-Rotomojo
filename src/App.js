import "./App.css";
import AllGamesList from "./screens/AllGamesList";
import NavBar from "./component/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlatformScreen from "./screens/PlatformScreen";
// import Home from "./screens/Home";
import Search from "./component/Search";
import Sort from "./screens/Sort";
import Creator from "./screens/Creator";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />

				<Routes>
					<Route path="/game-search-Rotomojo/" element={<AllGamesList />} />
					<Route path="/game-search-Rotomojo/allGames" element={<AllGamesList />} />
					<Route path="/game-search-Rotomojo/Search" element={<Search />} />
					<Route path="/game-search-Rotomojo/platform" element={<PlatformScreen />} />
					<Route path="/game-search-Rotomojo/sort" element={<Sort />} />
					<Route path="/game-search-Rotomojo/creator" element={<Creator />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
