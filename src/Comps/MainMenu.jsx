import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const MainMenu = () => {
	return (
		<>
			<div className="highScore">
				<span>High Score: {window.localStorage.getItem("highScore")}</span>
			</div>
			<div className="bigBox">
				<div className="container">
					<img
						src={Logo}
						alt="Logo"
						className="logoImg" />
				</div>
				<Link to="/game">
					<div className="container">
						<button id="game_text">
							START GAME
							<div style={{ fontSize: "x-large" }}>Not for Noobs !!!</div>
						</button>
					</div>
				</Link>
			</div>
		</>
	);
};

export default MainMenu;
