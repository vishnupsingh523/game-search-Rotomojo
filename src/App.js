import "./App.css";
import AllGamesList from "./screens/AllGamesList";
import NavBar from "./component/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PlatformScreen from "./screens/PlatformScreen";
import Home from "./screens/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allGames" element={<AllGamesList />} />
          <Route path="/platform" element={<PlatformScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
