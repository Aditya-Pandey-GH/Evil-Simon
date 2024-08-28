import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Game = () => {
	const navigate = useNavigate();
	const [level, setLevel] = useState(-1);
	const [ind, setInd] = useState(0);
	const [colStack, setColStack] = useState([]);
	const [highScore, setHighScore] = useState(parseInt(window.localStorage.getItem("highScore")));
	const colNumMap = { 1: "red", 2: "yellow", 3: "blue", 4: "green" };

	// Jaise hi game start hoga, uske 3 seconds ke baad ye function Random colors generate karega depending upon the level and unko store karega in 'colStack'.
	const game = () => {
		setLevel((prevLevel) => prevLevel + 1);
		setInd(0);
		setTimeout(() => {
			// One out of 1,2,3,4 will be generated and jo bhi number generate hoga, uska respective color list me push ho jaayega.
			let clr = Math.floor(Math.random() * 4) + 1;
			setColStack(prevColStack => [...prevColStack, colNumMap[clr]]);

			// Jo bhi color hamne choose kiya hai uski ID ko refer karega, and uski properties get kar lega. Iske baad, us color ke dabbe ki brightness 25% kar do, and after 200ms, brightness ko wapis full kar do (to create a flicker effect).
			highlightBox(colNumMap[clr]);

		}, 1000);
	};

	const highlightBox = (color) => {
		let colBox = document.getElementById(color);
		colBox.style.filter = "brightness(25%)";
		setTimeout(() => {
			colBox.style.filter = "brightness(100%)";
		}, 250);
	};

	// Jab bhi koi banda ek button press karega, to konsa button press hoga wo function me pass hoga, and wahi color register hoga. Then ye function check karega ki yahi color ka button press hona chahiye the ya nahi. And it will do by cross-verifying 'colStack' ki 'ind' position with the color or its color map. 
	const btnPressed = (colName) => {
		if (colStack[ind] === colName) {
			setInd((prevInd) => prevInd + 1);
			if (ind === level) {
				game();
			}
		} else {
			// const highScore = parseInt(window.localStorage.getItem("highScore"));
			if (highScore < level) {
				window.localStorage.setItem("highScore", level);
				setHighScore(level);
			}
			navigate("/gameOver", { replace: true });
		}
	};

	useEffect(() => {
		game();
	}, []);

	return (
		<>
			<div className="highScore">
				<span>High Score: {highScore}</span>
			</div>
			<div className="container">
				<div id="in_game_text">
					<b>Score: </b>
					<span>{level}</span>
				</div>
			</div>
			<div id="buttons">
				<div id="red" className="box" onClick={() => { btnPressed("red") }}></div>
				<div id="yellow" className="box" onClick={() => { btnPressed("yellow") }}></div>
				<div id="blue" className="box" onClick={() => { btnPressed("blue") }}></div>
				<div id="green" className="box" onClick={() => { btnPressed("green") }}></div>
			</div>
		</>
	);
};

export default Game;
