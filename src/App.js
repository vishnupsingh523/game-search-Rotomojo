import "./App.css";
import AllGamesList from "./screens/AllGamesList";
import NavBar from "./component/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlatformScreen from "./screens/PlatformScreen";
// import Home from "./screens/Home";
import Search from "./component/Search";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />

				<Routes>
					<Route path="/" element={<AllGamesList />} />
					<Route path="/allGames" element={<Search />} />
					<Route path="/platform" element={<PlatformScreen />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
