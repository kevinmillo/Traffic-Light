import React, { useState } from "react";

const Home = () => {
	const [isRedOn, setIsRedOn] = useState(false);
	const tooglered = () => {
		setIsRedOn(redPrevState => !redPrevState);
	};

	const [isYellowOn, setIsYellowOn] = useState(false);
	const toogleyellow = () => {
		setIsYellowOn(yellowPrevState => !yellowPrevState);
	};
	const [isGreenOn, setIsGreenOn] = useState(false);
	const tooglegreen = () => {
		setIsGreenOn(greenPrevState => !greenPrevState);
	};
	return (
		<div>
			<div id="barrasuperior"></div>
			<div id="semaforo">
				<div
					className={isRedOn ? "rojoencendido" : "rojo"}
					onClick={tooglered}></div>
				<div
					className={isYellowOn ? "amarilloencendido" : "amarillo"}
					onClick={toogleyellow}></div>
				<div
					className={isGreenOn ? "verdeencendido" : "verde"}
					onClick={tooglegreen}></div>
			</div>
		</div>
	);
};

export default Home;
