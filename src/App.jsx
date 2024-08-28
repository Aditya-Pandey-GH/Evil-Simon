import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./Comps/MainMenu";
import Game from "./Comps/Game";
import './Style.css';
import GameOver from "./Comps/GameOver";

const App = () => {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainMenu />} />
					<Route path="/game" element={<Game />} />
					<Route path="/gameOver" element={<GameOver />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
