import { HashRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./Comps/MainMenu";
import Game from "./Comps/Game";
import './Style.css';
import GameOver from "./Comps/GameOver";
import { useState } from "react";

const App = () => {

	return (
		<>
			<HashRouter basename={import.meta.env.BASE_URL}>
				<Routes>
					<Route path="/" element={<MainMenu />} />
					<Route path="/game" element={<Game />} />
					<Route path="/gameOver" element={<GameOver />} />
				</Routes>
			</HashRouter>
		</>
	);
};

export default App;
