import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const GameOver = () => {
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
				<Link to="/">
					<div className="container">
						<button id="game_text">
							YOU NOOB !!!
							<div style={{ fontSize: "x-large" }}>Still have guts to retry?</div>
						</button>
					</div>
				</Link>
			</div>
		</>
	);
};

export default GameOver;
